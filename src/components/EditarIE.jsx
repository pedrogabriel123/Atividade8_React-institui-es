import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const EditarIE = ({ show, handleClose, ie, refreshData }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (ie) setFormData(ie);
    }, [ie]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:3000/ies/${ie.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            toast.info("Instituição editada com sucesso!");
            refreshData();
            handleClose();
        } catch (err) {
            console.error("Erro ao editar:", err);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Instituição</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nome da Instituição</Form.Label>
                        <Form.Control type="text" name="NO_ENTIDADE" value={formData.NO_ENTIDADE || ""} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Região</Form.Label>
                        <Form.Control type="text" name="NO_REGIAO" value={formData.NO_REGIAO || ""} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UF</Form.Label>
                        <Form.Control type="text" name="NO_UF" value={formData.NO_UF || ""} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mesorregião</Form.Label>
                        <Form.Control type="text" name="NO_MESORREGIAO" value={formData.NO_MESORREGIAO || ""} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Microrregião</Form.Label>
                        <Form.Control type="text" name="NO_MICRORREGIAO" value={formData.NO_MICRORREGIAO || ""} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Município</Form.Label>
                        <Form.Control type="text" name="NO_MUNICIPIO" value={formData.NO_MUNICIPIO || ""} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Matrículas</Form.Label>
                        <Form.Control type="number" name="QT_MAT_BAS" value={formData.QT_MAT_BAS || ""} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Salvar Alterações
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

EditarIE.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ie: PropTypes.object,
    refreshData: PropTypes.func.isRequired,
};

export default EditarIE;
