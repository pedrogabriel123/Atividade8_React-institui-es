import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const schema = Yup.object().shape({
    NO_ENTIDADE: Yup.string().required("O nome da instituição é obrigatório."),
    NO_REGIAO: Yup.string().required("A região é obrigatória."),
    NO_UF: Yup.string().required("O estado (UF) é obrigatório."),
    NO_MUNICIPIO: Yup.string().required("O município é obrigatório."),
    NO_MESORREGIAO: Yup.string().required("A mesorregião é obrigatória."),
    NO_MICRORREGIAO: Yup.string().required("A microrregião é obrigatória."),
    QT_MAT_BAS: Yup.number()
        .typeError("Matrículas devem ser um número")
        .required("O número de matrículas é obrigatório."),
});

const CadastroIE = ({ show, handleClose, refreshData }) => {
    const initialValues = {
        NO_ENTIDADE: "",
        NO_REGIAO: "",
        NO_UF: "",
        NO_MUNICIPIO: "",
        NO_MESORREGIAO: "",
        NO_MICRORREGIAO: "",
        QT_MAT_BAS: "",
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch("http://localhost:3000/ies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!response.ok) throw new Error("Erro ao cadastrar a IE");

            toast.success("Instituição cadastrada com sucesso!");
            refreshData();
            handleClose();
            resetForm();
        } catch (err) {
            toast.error("Erro ao cadastrar a instituição.");
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Nova IE</Modal.Title>
                </Modal.Header>

                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nome da Instituição</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NO_ENTIDADE"
                                        value={values.NO_ENTIDADE}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.NO_ENTIDADE && touched.NO_ENTIDADE ? "is-invalid" : ""}
                                    />
                                    {errors.NO_ENTIDADE && touched.NO_ENTIDADE && (
                                        <div className="text-danger">{errors.NO_ENTIDADE}</div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Região</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NO_REGIAO"
                                        value={values.NO_REGIAO}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.NO_REGIAO && touched.NO_REGIAO ? "is-invalid" : ""}
                                    />
                                    {errors.NO_REGIAO && touched.NO_REGIAO && (
                                        <div className="text-danger">{errors.NO_REGIAO}</div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>UF</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NO_UF"
                                        value={values.NO_UF}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.NO_UF && touched.NO_UF ? "is-invalid" : ""}
                                    />
                                    {errors.NO_UF && touched.NO_UF && (
                                        <div className="text-danger">{errors.NO_UF}</div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Município</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NO_MUNICIPIO"
                                        value={values.NO_MUNICIPIO}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.NO_MUNICIPIO && touched.NO_MUNICIPIO ? "is-invalid" : ""}
                                    />
                                    {errors.NO_MUNICIPIO && touched.NO_MUNICIPIO && (
                                        <div className="text-danger">{errors.NO_MUNICIPIO}</div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Mesorregião</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NO_MESORREGIAO"
                                        value={values.NO_MESORREGIAO}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.NO_MESORREGIAO && touched.NO_MESORREGIAO ? "is-invalid" : ""}
                                    />
                                    {errors.NO_MESORREGIAO && touched.NO_MESORREGIAO && (
                                        <div className="text-danger">{errors.NO_MESORREGIAO}</div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Microrregião</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NO_MICRORREGIAO"
                                        value={values.NO_MICRORREGIAO}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.NO_MICRORREGIAO && touched.NO_MICRORREGIAO ? "is-invalid" : ""}
                                    />
                                    {errors.NO_MICRORREGIAO && touched.NO_MICRORREGIAO && (
                                        <div className="text-danger">{errors.NO_MICRORREGIAO}</div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Matrículas</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="QT_MAT_BAS"
                                        value={values.QT_MAT_BAS}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.QT_MAT_BAS && touched.QT_MAT_BAS ? "is-invalid" : ""}
                                    />
                                    {errors.QT_MAT_BAS && touched.QT_MAT_BAS && (
                                        <div className="text-danger">{errors.QT_MAT_BAS}</div>
                                    )}
                                </Form.Group>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Fechar
                                </Button>
                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Cadastrar"}
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <ToastContainer />
        </>
    );
};

CadastroIE.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    refreshData: PropTypes.func.isRequired,
};

export default CadastroIE;
