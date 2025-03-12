import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    NO_ENTIDADE: yup.string().required("O nome da instituição é obrigatório."),
    NO_REGIAO: yup.string().required("A região é obrigatória."),
    NO_UF: yup.string().required("O estado (UF) é obrigatório."),
    NO_MUNICIPIO: yup.string().required("O município é obrigatório."),
    NO_MESORREGIAO: yup.string().required("A mesorregião é obrigatória."),
    NO_MICRORREGIAO: yup.string().required("A microrregião é obrigatória."),
    QT_MAT_BAS: yup.number().typeError("Matrículas devem ser um número").required("O número de matrículas é obrigatório."),
});


const CadastroIE = ({ show, handleClose, refreshData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData) => {
        try {
            const response = await fetch('http://localhost:3000/ies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Erro ao cadastrar a IE');

            toast.success("Instituição cadastrada com sucesso!");
            refreshData();
            handleClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Nova IE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="NO_ENTIDADE">
                        <Form.Label>Nome da Instituição</Form.Label>
                        <Form.Control type="text" {...register("NO_ENTIDADE")} />
                        {errors.NO_ENTIDADE && <p className="text-danger">{errors.NO_ENTIDADE.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="NO_REGIAO" className="mt-2">
                        <Form.Label>Região</Form.Label>
                        <Form.Control type="text" {...register("NO_REGIAO")} />
                        {errors.NO_REGIAO && <p className="text-danger">{errors.NO_REGIAO.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="NO_UF" className="mt-2">
                        <Form.Label>UF</Form.Label>
                        <Form.Control type="text" {...register("NO_UF")} />
                        {errors.NO_UF && <p className="text-danger">{errors.NO_UF.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="NO_MUNICIPIO" className="mt-2">
                        <Form.Label>Município</Form.Label>
                        <Form.Control type="text" {...register("NO_MUNICIPIO")} />
                        {errors.NO_MUNICIPIO && <p className="text-danger">{errors.NO_MUNICIPIO.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="NO_MESORREGIAO" className="mt-2">
                        <Form.Label>Mesorregião</Form.Label>
                        <Form.Control type="text" {...register("NO_MESORREGIAO")} />
                        {errors.NO_MESORREGIAO && <p className="text-danger">{errors.NO_MESORREGIAO.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="NO_MICRORREGIAO" className="mt-2">
                        <Form.Label>Microrregião</Form.Label>
                        <Form.Control type="text" {...register("NO_MICRORREGIAO")} />
                        {errors.NO_MICRORREGIAO && <p className="text-danger">{errors.NO_MICRORREGIAO.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="QT_MAT_BAS" className="mt-2">
                        <Form.Label>Matrículas</Form.Label>
                        <Form.Control type="text" {...register("QT_MAT_BAS")} />
                        {errors.QT_MAT_BAS && <p className="text-danger">{errors.QT_MAT_BAS.message}</p>}
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Cadastrar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal >
    );
};

CadastroIE.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    refreshData: PropTypes.func.isRequired
};

export default CadastroIE;
