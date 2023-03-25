export function Administrador() {
    return (
        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/banner2.png?alt=media&token=851d3506-ce46-40f4-9fc7-12884d1f0175" alt="foto" class="img-fluid" />
                    </div>
                    <div class="col-4">
                        <h2>Registro de mercancia</h2>
                        <form>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-cart3"></i></span>
                                        <input type="text" class="form-control" placeholder="Nombre" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-images"></i></span>
                                        <input type="text" class="form-control" placeholder="Foto" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-boxes"></i></span>
                                        <input type="number" class="form-control" placeholder="Cantidad" />
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-card-text"></i></span>
                                        <input type="text" class="form-control" placeholder="Descripcion" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-currency-exchange"></i></span>
                                        <input type="number" class="form-control" placeholder="Precio" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-blockquote-right"></i></span>
                                        <input type="text" class="form-control" placeholder="Clasificacion" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-github"></i></span>
                                        <input type="text" class="form-control" placeholder="Marca" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-app"></i></span>
                                        <input type="text" class="form-control" placeholder="Presentacion" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">ml</span>
                                        <input type="text" class="form-control" placeholder="Peso" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-truck"></i></span>
                                        <input type="text" class="form-control" placeholder="Proveedor" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-activity"></i></span>
                                        <input type="Number" class="form-control" placeholder="Volumen" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-coin"></i></span>
                                        <input type="number" class="form-control" placeholder="IVA" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"></i></span>
                                        <input type="text" class="form-control" placeholder="Descuento" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date"></i></span>
                                        <input type="text" class="form-control" placeholder="Fecha ingreso" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="Fecha venciento" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}