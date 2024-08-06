import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './Privacy.css'

export const PrivacyPage = () => {

    const viemyItems = [
        {
            title: 'Precise Correlation with VBUS®',
            desc: <p><p>With VBUS®, we take correlation to new heights with our Advanced Correlation feature. This tool is designed to meticulously analyze the importance and potential impact of every event registered in your network. What does this mean? That we evaluate each event carefully, prioritizing those that are most urgent or have a significant impact on your operations, for focused and effective management.</p> <p>This advanced methodology gives you a deep and up-to-date understanding of the dynamics of your technological environment, allowing you to:</p> <p>Precisely detect causal relationships between events, enabling early and precise intervention.Identify connections between devices of the same technological family to optimize compatibility and performance.Discover links between equipment from different families, promoting complete integration.Segment events by topology, geography, or hierarchy for an organized and clear view.Enrich event correlation by integrating with external databases, expanding the context and analytical precision.</p> <p>With VBUS®, Advanced Correlation is not just a feature, its a promise of clarity, anticipation, and total control over your technological environment!</p></p>
        },
        {
            title: 'Stratified Message Filtering',
            desc: 'The VIGIA Network BUS® employs a layered processing approach that enables real-time filtering based on patterns and various rules. Our intelligent processing capability identifies irrelevant messages, significantly reducing the number of events to be processed.'
        },
        {
            title: 'Smart Processing',
            desc: 'By simultaneously applying multiple rules, we ensure that each business area receives only the messages relevant to its operations. This translates into a benefit that allows users to quickly parameterize priorities, formats, tags, classifications, filtering preferences, storage policies, and more.'
        },
        {
            title: 'Protocols and Interfaces',
            desc: 'VBUS® comes with a default set of pre-designed interfaces and connectors that enable quick adoption, integration, and management of network-generated events. This allows for the processing of millions of events in a short time.Below are some of the most commonly used components:',
            image: null
        },
        {
            title: 'Visualization Modules',
            desc: 'The interface has been designed with the aim of providing end users with a completely intuitive experience in terms of usage, navigation, and data discovery. It boasts an extensive array of tools, ensuring that any user can make the most of the platform without the need for extensive training.'
        },
        {
            title: 'Normalized Decoding',
            desc: 'The event flow is standardized according to the X.733 standard of the International Telecommunication Union (ITU), ensuring data integrity and avoiding compatibility issues between different software and hardware versions. This allows for the designation of custom variables, defined and constrained by the NOC.'
        },
    ]


    return (
        <Layout posicion={""}>
            <div className="principalContainer">
                <h1 className='title-light'>Aviso de privacidad de usuarios y proveedores</h1>
                <div className="generalContainer display-column">
                    <div className='text-normal'>
                        <p>T7 DIMENSION, S.A. DE C.V., MPS VIGIA S.A. DE C.V. Y T7 INTERNATIONAL GROUP LLC. (EN ADELANTE IDENTIFICADOS CONJUNTAMENTE COMO “T7G”) COMO EMPRESA RESPONSABLE Y RESPETUOSA DE LOS DATOS PERSONALES, PONE A SU DISPOSICIÓN EL PRESENTE AVISO DE PRIVACIDAD CON EL OBJETO DE GARANTIZAR EL DERECHO DE LOS TITULARES A LA AUTODETERMINACIÓN INFORMATIVA.  <br /><br /> EL PRESENTE AVISO DE PRIVACIDAD SE PONE A DISPOSICIÓN DE LOS TITULARES EN EL SITIO DE INTERNET QUE OPERA BAJO EL NOMBRE DE DOMINIO WWW.T7G.AI (EN ADELANTE EL SITIO WEB). <br /><br /><br />



                            <b>1. RESPONSABLE: IDENTIDAD Y DOMICILIO. </b><br /><br />

                            El Responsable del tratamiento de los Datos Personales es el grupo empresarial, identificado como T7G, conformado por las siguientes sociedades:<br /><br />

                            1.	T7 DIMENSION, S.A. DE C.V., con domicilio en Boulevard Adolfo López Mateos #428, entre Calzada Santa Catarina y Calle León Felipe, San Ángel Inn, Álvaro Obregón, C.P. 01060, Ciudad de México, México. <br />
                            2.	MPS VIGIA S.A. DE C.V., con domicilio en Cráter #98, entre Cascada y Av. Paseo del Pedregal, Jardines del Pedregal, Álvaro Obregón, C.P. 01900, Ciudad de México, México. <br />
                            3.	T7 INTERNATIONAL GROUP LLC., con domicilio en #16192 Coastal Hwy, Condado de Sussex, Lewes, Delaware, C.P. 19958, Estados Unidos de América.<br /><br />

                            Así, T7G se compromete a respetar lo establecido en el presente Aviso de Privacidad, así como las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante la “Ley”), su Reglamento y de los Lineamientos del Aviso de Privacidad. <br /><br />


                            <b>2. DATOS PERSONALES SOMETIDOS A TRATAMIENTO.</b><br /><br />


                            En virtud del presente Aviso de Privacidad, T7G hace del conocimiento del Titular que someterá a tratamiento los datos personales que a continuación se señalan: <br /><br />

                            2.1. Datos Personales de Usuarios:<br />

                            a)	Datos de identificación.<br />
                            b)	Datos de contacto.<br />
                            c)	Datos laborales. <br />
                            d)	Datos de navegación: cookies.<br /><br />

                            2.2. Datos Personales de Proveedores: <br />

                            a)	Datos de identificación.<br />
                            b)	Datos de contacto.<br />
                            c)	Datos patrimoniales y financieros.<br /><br />

                            En términos de lo dispuesto en el artículo 8 de la Ley, el Titular otorga su consentimiento expreso para que T7G someta a Tratamiento sus Datos Personales patrimoniales y financieros.<br /><br />

                            Aunado a lo anterior, se hace del conocimiento del Titular que T7G no someterá a tratamiento Datos Personales Sensibles.<br /><br /><br />

                            <b>3. FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES.</b><br /><br />

                            T7G tratará los Datos Personales del Titular para las finalidades que a continuación se mencionan:<br /><br />

                            <b>3.1. Usuarios:</b><br /><br />

                            <b>A)	Finalidades Primarias:</b> <br />

                            <b>•</b>	Identificar al Titular.<br />
                            <b>•</b>	Mantener la comunicación que resulte necesaria con el Titular, por concepto de los productos y servicios que sean de su interés en T7G.<br />
                            <b>•</b>	Hacerle llegar al Titular la propuesta de los productos y servicios que sean de su interés en T7G. <br />
                            <b>•</b>	Atender las dudas y sugerencias del Titular sobre T7G.<br />
                            <b>•</b>	Mantener actualizada la información del Titular.<br />
                            <b>•</b>	Analizar y evaluar los hábitos de navegación del Titular.  <br />
                            <b>•</b>	Mejorar la experiencia de navegación del Titular en el sitio web de T7G.<br /><br />




                            <b>B)	Finalidades Secundarias:</b><br />

                            <b>•</b>	Notificarle al Titular sobre los productos y servicios ofrecidos en T7G.<br />
                            <b>•</b>	Incluir la información del Titular en estudios estadísticos y reportes.<br /><br />




                            <b>3.2. Proveedores:</b><br /><br />

                            <b>A) Finalidades Primarias:</b><br />

                            <b>•</b> Identificar al Titular. <br />
                            <b>•</b> Mantener la comunicación que resulte necesaria con el Titular, por concepto de los productos y servicios que desee prestar y proveer en T7G.<br />
                            <b>•</b> Verificar la ubicación de su establecimiento, así como de los productos o servicios ofrecidos por este. <br />
                            <b>•</b> Analizar la capacidad económica del Titular, para efectos de determinar si puede cumplir con las obligaciones que este contraiga con T7G. <br />
                            <b>•</b> Realizar los pagos correspondientes por los productos y servicios prestados por el Titular en T7G.<br />
                            <b>•</b> Para efectuar cualquier modificación y/o terminación del contrato respectivo que se celebre con el Titular.<br />
                            <b>•</b> Atender las dudas del Titular sobre T7G.<br />
                            <b>•</b> Mantener actualizada la información del Titular.<br /><br />


                            <b>B)	Finalidades Secundarias:</b> <br />

                            <b>•</b> Contactar al Titular con el propósito de brindarle información sobre el tratamiento y situación de sus Datos Personales, así como de cambios en este Aviso de Privacidad.

                            <br /><br /><br />


                            <b>4. MECANISMOS PARA QUE EL TITULAR PUEDA MANIFESTAR SU NEGATIVA PARA EL TRATAMIENTO DE SUS DATOS PERSONALES PARA FINALIDADES SECUNDARIAS.  </b><br /><br />

                            En el supuesto que el Titular no desee que sus Datos Personales sean utilizados para todas o alguna de las Finalidades Secundarias contenidas en el apartado anterior, deberá enviar un correo electrónico a la dirección privacy.notice@t7internationalgroup.com con el asunto “Negativa de Tratamiento para Finalidades Secundarias”. En el cuerpo del correo, el Titular deberá especificar para qué finalidades desea manifestar su negativa, así como sus datos de identificación, para que se le dé cumplimiento a su solicitud.  <br /><br /><br />



                            <b>5. TRANSFERENCIAS DE DATOS PERSONALES.</b><br /><br />

                            Se hace del conocimiento del Titular que T7G llevará a cabo las siguientes transferencias con sus Datos Personales.  <br /><br />

                        </p>


                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td>Tercero</td>
                                    <td>Finalidad</td>
                                    <td>Consentimiento</td>
                                </tr>
                                <tr>
                                    <td>Empresas del mismo grupo empresarial.</td>
                                    <td>Gestión de las operaciones internas de T7G.</td>
                                    <td>No necesario.</td>
                                </tr>
                                <tr>
                                    <td>Entidades financieras.</td>
                                    <td>Gestionar el cobro y/o pago de los productos o servicios adquiridos y/o prestados y/o proveídos por el Titular en T7G.</td>
                                    <td>No necesario.</td>
                                </tr>
                            </tbody>
                        </table>



                        <br /><br />

                        <p>
                            <b>6. MEDIOS Y PROCEDIMIENTO PARA EL EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN U OPOSICIÓN.</b><br /><br />

                            T7G reconoce a los Titulares la posibilidad de ejercer Derechos ARCO sobre sus Datos Personales, que consisten en lo siguiente:    <br />
                            <b>A.</b> Derecho de Acceso: Conocer con cuáles de sus Datos Personales cuenta T7G y cuáles son las finalidades de su tratamiento. <br />
                            <b>B.</b> Derecho de Rectificación: Solicitar la corrección de sus Datos Personales en caso de que carezcan de actualización, sean inexactos, erróneos o estén incompletos.<br />
                            <b>C.</b> Derecho de Cancelación: Solicitud de eliminación de todo registro o copia de sus Datos Personales, ya sea física o electrónica. <br />
                            <b>D.</b> Derecho de Oposición: Solicitar el cese en el uso de sus Datos Personales. 	<br /><br />



                            El ejercicio de los derechos descritos en el presente numeral se efectúa mediante solicitud por escrito enviada vía correo electrónico a la dirección
                            <a href="mailto:privacy.notice@t7internationalgroup.com">privacy.notice@t7internationalgroup.com</a> con el asunto “Ejercicio de Derechos ARCO”. La dirección electrónica mencionada corresponde al departamento que dará trámite a las solicitudes en cuestión y que podrá ser contactado por los Titulares en cualquier tiempo.   <br /><br />

                            El Titular deberá proporcionar la información siguiente:  <br />


                            <b>•</b> Nombre completo y domicilio. <br />
                            <b>•</b> Descripción clara y precisa de los Datos Personales respecto de los cuales pretende ejercer alguno de los Derechos ARCO, además de cualquier documento que permita ubicarlos. <br />
                            <b>•</b> Mención del Derecho ARCO que desea ejercer.<br />
                            <b>•</b> En caso de que se solicite una Rectificación de datos, se deberán indicar las modificaciones a realizar y se deberá aportar la documentación que acredite la razón de los cambios solicitados. <br /><br />


                            Asimismo, la solicitud deberá acompañarse de los siguientes documentos:  <br />

                            <b>•</b> Copia de la identificación oficial del Titular o de su representante. <br />
                            <b>•</b> Documento y/o información que acredite que la información personal se encuentra en posesión de T7G.<br />
                            <b>•</b> En el supuesto que el Titular no presente personalmente la solicitud, quien lo haga deberá acreditar su representación, mediante escritura pública o carta poder firmada ante dos testigos, junto con identificaciones oficiales de Titular y representante. <br /><br />


                            <b>7. MEDIO Y PROCEDIMIENTO PARA REVOCACIÓN DEL CONSENTIMIENTO.</b><br /><br />

                            En cualquier momento y por cualquier causa, el Titular podrá revocar la autorización que le ha dado a T7G para el tratamiento de sus Datos Personales. T7G manifiesta que, para el cumplimiento de ciertos fines, la revocación del consentimiento podría significar la imposibilidad de continuar con la relación entre el Titular y T7G.  <br /><br />

                            En su caso, la revocación del consentimiento se llevará a cabo de acuerdo con el siguiente procedimiento. <br />
                            <b>•</b>	Envío de un correo electrónico a la dirección privacy.notice@t7internationalgroup.com con el asunto “Revocación del Consentimiento”. <br />
                            <b>•</b>	En el cuerpo del mensaje se deberá señalar:<br />
                            <b>•</b>	El nombre completo del Titular. <br />
                            <b>•</b>	Fecha a partir de la cual desea que se haga efectiva la revocación. <br />
                            <b>•</b>	Copia del documento oficial que acredite su identidad, que se deberá adjuntar a la solicitud. En el supuesto que el Titular no presente por su propio derecho la solicitud, quien lo haga deberá acreditar su representación, mediante escritura pública o carta poder firmada ante dos testigos, junto con identificaciones oficiales de Titular y representante. <br /><br />

                            T7G responderá a su solicitud mediante correo electrónico en un plazo de 20 (veinte) días hábiles contados a partir de la fecha en la que se recibió. Este plazo únicamente será aplicable siempre y cuando T7G cuente con la información suficiente para poder atender la solicitud, en términos de lo establecido en el siguiente párrafo.  <br /><br />

                            El Titular debe tomar en consideración que, a fin de contar con elementos suficientes para atender su petición, T7G podrá solicitarle información adicional dentro de los 5 (cinco) días hábiles siguientes a la recepción de la solicitud. A partir del requerimiento de T7G, el Titular contará con un plazo de 10 (diez) días hábiles para desahogar este requerimiento. En este supuesto, el plazo de 20 (veinte) días hábiles mencionado en el párrafo anterior empezará a correr al día siguiente de aquél en el que el Titular hubiere atendido el requerimiento de T7G. <br /><br /><br />


                            <b>8. RESPONSABLE DE TRAMITAR SOLICITUDES DE DERECHOS ARCO, LIMITACIÓN DE USO Y DIVULGACIÓN, ASÍ COMO REVOCACIONES. </b><br /><br />

                            En caso de que el Titular desee revocar su consentimiento, limitar el uso y divulgación de su información, así como Acceder, Rectificar, Cancelar u Oponerse al Tratamiento de sus Datos Personales, lo deberá hacer a través del Departamento designado por T7G, cuyos datos de contacto se enuncian a continuación: <br />
                            <b>•</b>	Responsable: DEPARTAMENTO DE PROTECCIÓN DE DATOS PERSONALES DE T7G. <br />
                            <b>•</b>	Correo electrónico: <a href="mailto:privacy.notice@t7internationalgroup.com">privacy.notice@t7internationalgroup.com</a><br /><br /><br />


                            <b>9. MEDIOS PARA LIMITAR EL USO O DIVULGACIÓN DE LOS DATOS PERSONALES.</b><br /><br />

                            T7G en aras de garantizar la protección de los Datos Personales de los Titulares, se compromete a la celebración de actos jurídicos, la adopción de políticas de privacidad, de protección de Datos Personales y de seguridad de la información exigibles al interior de su organización, así como a implementar medidas de seguridad de carácter tecnológico, físico y administrativo.<br /><br />

                            T7G almacena la información personal en bases de datos con acceso limitado que se encuentran en instalaciones controladas con mecanismos de seguridad. T7G se compromete a que la información proporcionada por el Titular sea considerada y tratada con carácter confidencial.<br /><br />

                            Asimismo, T7G brinda mecanismos alternos al ejercicio de Derechos ARCO para que los Titulares limiten el uso y divulgación de sus Datos Personales. En este sentido, hace del conocimiento del Titular que, para evitar recibir publicidad, puede inscribirse en el Registro Público para Evitar Publicidad (REPEP) de la Procuraduría Federal del Consumidor (PROFECO), en el vínculo <a href="https://repep.profeco.gob.mx/" target="_blank">https://repep.profeco.gob.mx/ </a><br /><br />

                            En caso de que el Titular desee conocer más sobre lo abordado en este apartado, podrá enviar un correo electrónico a la dirección
                            <a href="mailto:privacy.notice@t7internationalgroup.com">privacy.notice@t7internationalgroup.com</a> con el asunto “Limitación de Uso o Divulgación”, expresando sus dudas, comentarios y sugerencias con respecto al objeto del presente.<br /><br /><br />



                            <b>10. PLAZO DE ALMACENAMIENTO DE LOS DATOS PERSONALES.</b><br /><br />

                            En cumplimiento al principio de calidad, todos los Datos Personales del Titular serán resguardados por el tiempo necesario para cumplir con las finalidades para las que fueron recabados. Posteriormente, se procederá a un periodo de bloqueo previo a su cancelación. <br /><br /><br />

                            Una vez recibida la solicitud del Titular, T7G le hará llegar vía correo electrónico un acuse de recibo. Posteriormente, responderá a la petición del Titular por correo electrónico en un plazo que no podrá exceder de 20 (veinte) días hábiles contados a partir de que se recibió. Este plazo únicamente será aplicable siempre y cuando T7G cuente con la información suficiente para poder atender la solicitud, en términos de lo establecido en el siguiente párrafo.  <br /><br />

                            El Titular debe tomar en consideración que, a fin de contar con elementos suficientes para atender su petición, T7G podrá solicitarle información adicional dentro de los 5 (cinco) días hábiles siguientes a la recepción de la solicitud. A partir del requerimiento de T7G, el Titular contará con un plazo de 10 (diez) días hábiles para desahogar este requerimiento. En este supuesto, el plazo de 20 (veinte) días hábiles mencionado en el párrafo anterior empezará a correr al día siguiente de aquél en el que el Titular hubiere atendido el requerimiento de T7G.<br /><br />

                            Si la solicitud es declarada procedente y el Titular ha acreditado su personalidad y la titularidad del Derecho ARCO que pretendió ejercer, el Acceso a los Datos Personales, los cambios solicitados, la Cancelación o la respuesta a la Oposición se harán en un plazo máximo de 15 (quince) días hábiles contados a partir de la fecha en que se le haya dado respuesta a la solicitud. <br /><br />

                            Tratándose de solicitudes de Acceso a Datos Personales, procederá su entrega previa acreditación de la identidad del solicitante o representante, según corresponda. Dicha entrega se hará en copias simples en el domicilio mencionado en el presente, o bien, en documentos electrónicos a la dirección de correo desde la que se hubiere remitido la solicitud.  <br /><br />

                            En caso de que el objeto de la solicitud sea la Oposición, el tratamiento de los Datos Personales cesará el día hábil inmediato siguiente a la fecha en la que se le haya comunicado la respuesta afirmativa al Titular.
                            <br /><br /><br />



                            <b>11. COOKIES. </b><br /><br />

                            Las cookies son archivos de texto que son almacenados en el equipo de cómputo utilizado por el Titular al hacer uso del sitio web. Las cookies ayudan a T7G a brindarle una mejor experiencia cuando navega en el sitio web y le permiten mejorar dicha experiencia. <br /><br />

                            T7G usa cookies en su sitio web, sin embargo, cada Titular puede aceptar o rechazar el uso de éstas mediante la configuración para tal efecto en sus dispositivos utilizados. No obstante, es importante que el Titular tenga en cuenta que, si no acepta el uso de cookies, algunas funcionalidades del sitio web pueden no estar disponibles. <br /><br />

                            Para desactivar el uso de cookies, el Titular podrá consultar los vínculos siguientes:<br /><br />


                        </p>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td>Firefox</td>
                                    <td><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we </a></td>
                                </tr>
                                <tr>
                                    <td>Google Chrome</td>
                                    <td><a href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647" target="_blank">http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</a></td>
                                </tr>
                                <tr>
                                    <td>Microsoft Edge</td>
                                    <td><a href="https://support.microsoft.com/es-mx/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">https://support.microsoft.com/es-mx/help/17442/windows-internet-explorer-delete-manage-cookies</a></td>
                                </tr>
                                <tr>
                                    <td>Opera</td>
                                    <td><a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank">http://help.opera.com/Windows/11.50/es-ES/cookies.html</a></td>
                                </tr>
                                <tr>
                                    <td>Safari</td>
                                    <td><a href="http://www.apple.com/legal/privacy/es/cookies/" target="_blank">http://www.apple.com/legal/privacy/es/cookies/</a></td>
                                </tr>
                            </tbody>
                        </table>

                        <br /><br />

                        <b>12. CAMBIOS AL AVISO DE PRIVACIDAD.</b><br /><br />

                        Se hace del conocimiento del Titular que el presente Aviso de Privacidad podrá ser modificado en el tiempo y forma que T7G lo determine, atendiendo en todo caso a la legislación en la materia.<br /><br />

                        T7G informa a los Titulares que los cambios al presente serán notificados mediante la publicación de su versión actualizada en el sitio web y/o mediante del envío de un correo electrónico a la dirección que el Titular hubiere proporcionado.<br /><br /><br />


                        <b>13. FECHA DE ÚLTIMA ACTUALIZACIÓN: 5 de septiembre de 2023.</b>
                    </div>

                </div>


            </div>
        </Layout>
    )
}
