import React from 'react'
import { Card, Form, Row, Button } from 'react-bootstrap'

const CreateForm = () => {
    return (
        <>
            <Row className='d-flex justify-content-center'>
                <Card style={{ width: '20rem' }} >
                    <Card.Body>
                        <Card.Title className="text-center">Formulario de Creación</Card.Title>
                        <Form.Group>
                            <Form.Label>
                                Agregue un Nuevo Titulo
                            </Form.Label>
                            <Form.Control type="text" placeholder="Ingrese un titulo" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Agregue un contenido
                            </Form.Label>
                            <Form.Control as="textarea" placeholder="Ingrese un contenido" rows={3} />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-end">
                            <Button>
                                Guardar
                            </Button>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default CreateForm

