import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PropriedadeCard = ({ data, onDetalhar }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{data.NO_ENTIDADE}</Card.Title>
        <Card.Text>
          <strong>Município:</strong> {data.NO_MUNICIPIO} <br />
          <strong>Matrículas:</strong> {data.QT_MAT_BAS || 'Não informado'}
        </Card.Text>
        <Button variant="info" onClick={() => onDetalhar(data)}>
          Detalhar
        </Button>
      </Card.Body>
    </Card>
  );
};

// Validação de props
PropriedadeCard.propTypes = {
  data: PropTypes.shape({
    NO_ENTIDADE: PropTypes.string.isRequired,
    NO_MUNICIPIO: PropTypes.string.isRequired,
    QT_MAT_BAS: PropTypes.string,
  }).isRequired,
  onDetalhar: PropTypes.func.isRequired,
};

export default PropriedadeCard;
