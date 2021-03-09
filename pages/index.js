import Layout from '../components/layout'

const Index = () => (
    <Layout>
        {/* header card */}
        <div className="row">
            <div className="col-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-4">
                            <img src="profile.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-8">
                            <h1>
                                Nombre de la persona
                            </h1>
                            <h3>
                                Profeción
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi obcaecati minima optio dolore facere laudantium modi odit. Ducimus minus impedit maiores, provident qui vitae amet officia nobis et quae.
                            </p>
                            <a href="/vermas" className="text-warning">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;