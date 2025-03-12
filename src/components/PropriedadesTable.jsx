import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PropriedadesTable = ({ data, onDetalhar, onEditar, onRemover }) => {
  return (
    <Table striped bordered hover responsive className="w-100">
      <thead>
        <tr>
          <th>Nome da Instituição</th>
          <th>Município</th>
          <th>Matrículas</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.NO_ENTIDADE}</td>
              <td>{item.NO_MUNICIPIO}</td>
              <td>{item.QT_MAT_BAS || "Não informado"}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => onDetalhar(item)}>
                  Detalhar
                </Button>
                <Button variant="warning" size="sm" className="me-2" onClick={() => onEditar(item)}>
                  Editar
                </Button>
                <Button variant="danger" size="sm" onClick={() => onRemover(item.id)}>
                  Remover
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              Nenhuma instituição encontrada.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

PropriedadesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onDetalhar: PropTypes.func.isRequired,
  onEditar: PropTypes.func.isRequired,
  onRemover: PropTypes.func.isRequired,
};

export default PropriedadesTable;
