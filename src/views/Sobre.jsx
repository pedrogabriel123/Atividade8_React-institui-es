import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSchool, FaDatabase, FaSearch, FaLaptopCode } from "react-icons/fa";

const Sobre = () => {
  return (
    <Container className="mt-4">
      <motion.h1
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sobre a Aplicação
      </motion.h1>

      <Row className="justify-content-center">
        <Col md={10}>
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Esta aplicação foi desenvolvida para facilitar o **cadastro, consulta, edição e remoção de Instituições de Ensino**.
            A plataforma utiliza tecnologias modernas, como **React, JSON Server e Bootstrap**, para garantir uma experiência intuitiva e fluida.
          </motion.p>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Card 1 - Cadastro de IE */}
        <Col md={3}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="shadow-lg text-center p-3">
              <FaSchool size={50} className="mx-auto text-primary" />
              <Card.Body>
                <Card.Title>Cadastro de IEs</Card.Title>
                <Card.Text>
                  Permite adicionar novas Instituições de Ensino com detalhes completos.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Card 2 - Banco de Dados */}
        <Col md={3}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="shadow-lg text-center p-3">
              <FaDatabase size={50} className="mx-auto text-success" />
              <Card.Body>
                <Card.Title>Banco de Dados</Card.Title>
                <Card.Text>
                  Utiliza JSON Server para simular uma API REST para armazenamento dos dados.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Card 3 - Busca Avançada */}
        <Col md={3}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="shadow-lg text-center p-3">
              <FaSearch size={50} className="mx-auto text-warning" />
              <Card.Body>
                <Card.Title>Busca Inteligente</Card.Title>
                <Card.Text>
                  Sistema de busca flexível que ignora maiúsculas e minúsculas.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Card 4 - Desenvolvimento */}
        <Col md={3}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="shadow-lg text-center p-3">
              <FaLaptopCode size={50} className="mx-auto text-danger" />
              <Card.Body>
                <Card.Title>Desenvolvimento</Card.Title>
                <Card.Text>
                  Criado com React, Bootstrap e tecnologias modernas para melhor experiência.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sobre;
