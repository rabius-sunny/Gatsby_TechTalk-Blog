import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import authors from '../util/authors'
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import myImage from '../images/author.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Author">
    <SEO title="Author" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={myImage} style={{ maxWidth: '100%', borderRadius: '5px' }} alt="Muhammad Profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              classname="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>

  </Layout>
)

export default TeamPage
