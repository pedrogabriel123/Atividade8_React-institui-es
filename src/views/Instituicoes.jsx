// Propriedades.jsx
import { useState, useEffect } from 'react';
import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import PropriedadesTable from '../components/PropriedadesTable';
import CadastroIE from '../components/CadastroIE';
import EditarIE from "../components/EditarIE";
import { toast } from "react-toastify";


const Instituicoes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nomeBusca, setNomeBusca] = useState('');
  const [selectedIE, setSelectedIE] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCadastroModal, setShowCadastroModal] = useState(false);
  const [editandoIE, setEditandoIE] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchData('http://localhost:3000/ies');
  }, []);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erro ao buscar dados');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBuscar = async () => {
    const nomeBuscaUpper = nomeBusca.toUpperCase().trim(); // Converter para maiúsculas e remover espaços extras

    try {
      const response = await fetch("http://localhost:3000/ies");
      if (!response.ok) throw new Error("Erro ao buscar dados");

      const data = await response.json();

      // Filtra as IEs comparando o nome em maiúsculas (ignora diferenças de maiúsculas e minúsculas)
      const resultadosFiltrados = data.filter(ie =>
        ie.NO_ENTIDADE.toUpperCase().trim() === nomeBuscaUpper
      );

      setData(resultadosFiltrados);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    }
  };


  const handleDetalhar = (ie) => {
    setSelectedIE(ie);
    setShowModal(true);
  };

  const handleEditar = (ie) => {
    setEditandoIE(ie);
    setShowEditModal(true);
  };

  const handleRemover = async (id) => {
    if (window.confirm("Tem certeza que deseja remover esta instituição?")) {
      try {
        await fetch(`http://localhost:3000/ies/${id}`, { method: "DELETE" });
        toast.error("Instituição removida com sucesso!");
        fetchData("http://localhost:3000/ies");
      } catch (err) {
        console.error("Erro ao remover:", err);
      }
    }
  };

  const handleCadastro = () => {
    setShowCadastroModal(true);
  };

  return (
    <>
      <div style={{ margin: '20px 0' }}>
        <Row>
          <Col xs={6}>
            <MDBInput label="Buscar" type="text" value={nomeBusca} onChange={(e) => setNomeBusca(e.target.value)} />
          </Col>
          <Col xs={3}>
            <MDBTooltip title="Buscar IE">
              <span className="d-inline-block">
                <Button variant="primary" onClick={handleBuscar} style={{ pointerEvents: 'auto' }}>
                  Buscar
                </Button>
              </span>
            </MDBTooltip>
          </Col>
          <Col xs={3}>
            <MDBTooltip title="Cadastrar Nova IE">
              <span className="d-inline-block">
                <Button variant="success" onClick={handleCadastro} style={{ pointerEvents: 'auto' }}>
                  Cadastrar
                </Button>
              </span>
            </MDBTooltip>
          </Col>
        </Row>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <div className="full-height">
        {!loading && !error && <PropriedadesTable data={data} onDetalhar={handleDetalhar} onEditar={handleEditar} onRemover={handleRemover} />}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da IE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedIE ? (
            <>
              <p><strong>Nome:</strong> {selectedIE.NO_ENTIDADE}</p>
              <p><strong>Região:</strong> {selectedIE.NO_REGIAO}</p>
              <p><strong>UF:</strong> {selectedIE.NO_UF}</p>
              <p><strong>Município:</strong> {selectedIE.NO_MUNICIPIO}</p>
              <p><strong>Mesorregião:</strong> {selectedIE.NO_MESORREGIAO}</p>
              <p><strong>Microrregião:</strong> {selectedIE.NO_MICRORREGIAO}</p>
              <p><strong>Matrículas:</strong> {selectedIE.QT_MAT_BAS}</p>
            </>
          ) : (
            <p>Erro ao carregar os detalhes.</p>
          )}
        </Modal.Body>
      </Modal>

      <CadastroIE
        show={showCadastroModal}
        handleClose={() => setShowCadastroModal(false)}
        refreshData={() => fetchData('http://localhost:3000/ies')}
        fields={["NO_REGIAO", "NO_UF", "NO_MUNICIPIO", "NO_MESORREGIAO", "NO_MICRORREGIAO", "NO_ENTIDADE", "QT_MAT_BAS"]}
      />
      <EditarIE
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        ie={editandoIE}
        refreshData={() => fetchData("http://localhost:3000/ies")}
      />

    </>
  );
};

export default Instituicoes;
