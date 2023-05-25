<?php

    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $tel = isset($_POST["tel"]) ? $_POST["tel"] : "";
    $message = isset($_POST["message"]) ? $_POST["message"] : "";

    $to = "contacto@academia-adaggio.com";
    // $to = "jorgetorrelles@gmail.com"; // Use this just to test
    $subject = "Consulta desde la Web";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $body = '
        <!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html>
            <head>
                <!-- Meta tags -->
                <meta lang="es"/>
                <meta http-equiv="content-type" content="text/html" charset="utf-8"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="format-detection" content="date=no"/>
                <meta name="format-detection" content="address=no"/>
                <meta name="format-detection" content="email=no"/>
                <meta name="x-apple-disable-message-reformatting"/>
                <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

                <!-- Default styles -->
                <style>
                    body {
                        margin: 0px auto;
                        padding: 0px;
                        width: 100% !important;
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        text-align: center;
                    }
                    table {
                        margin: 0px auto;
                        padding: 0px;
                        max-width: 600px;
                        border: none;
                        border-collapse: collapse;
                        mso-table-lspace: 0pt;
    		            mso-table-rspace: 0pt;
                    }
                    table tr td {
                        margin: 0px;
                        padding: 0px;
                        border: none;
                        border-collapse: collapse;
                    }
                    img {
                        -ms-interpolation-mode: bicubic;
                    }
                    .only-desktop {
                        display: table-cell !important;
                        visibility: visible !important;
                    }
                    .only-mobile {
                        display: none !important;
                        visibility: hidden !important;
                    }
                    @media (max-width: 650px) {
                        .only-desktop {
                            display: none !important;
                            visibility: hidden !important;
                        }
                        .only-mobile {
                            display: table-cell !important;
                            visibility: visible !important;
                        }
                    }
                </style>
                <!--[if gte mso]>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:AllowPNG/>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                <![endif]-->
            </head>
            <body style="margin: 0px auto; padding: 0px;">
                <!-- Table -->
                <table align="center" border="0" cellpadding="0" width="600" cellspacing="0" style="margin: 0px auto; padding: 0px; width: 100%; max-width: 600px;">
                    <!-- Email content -->
                    <tr>
                        <td align="center" valign="top" cellpadding="0" cellspacing="0">
                            <table align="center" border="0" cellpadding="0" width="600" cellspacing="0" style="margin: 0px auto; padding: 0px; width: 100%; max-width: 600px;">
                                <!-- Header content -->
                                <tr>
                                    <td align="center" valign="top" style="padding: 0px 0px 14px;">
                                        <a href="https://academia-adaggio.com/index.html" target="_blank">
                                            <img src="https://academia-adaggio.com/assets/images/logos/logo_bordo.png" width="200" style="display: block; width: 200px;" alt"Academia Adaggio Logo"/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 18px; mso-line-height-rule: exactly; padding: 25px; background-color: #ad0d27; color: #ffffff;">
                                        <b>'.$subject.'</b>
                                    </td>
                                </tr>
                                <!-- /Header content -->
                                <!-- Body content -->
                                <tr>
                                    <td align="center" valign="top" style="padding: 25px">
                                        <table align="center" border="0" cellpadding="0" width="550" cellspacing="0" style="margin: 0px auto; padding: 0px; width: 100%; max-width: 550px;">
                                            <tr>
                                                <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 18px; mso-line-height-rule: exactly; color: #434343; padding: 0px 0px 14px;">
                                                    <b><u>Nombre:</u></b><br>'.$name.'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 18px; mso-line-height-rule: exactly; color: #434343; padding: 0px 0px 14px;">
                                                    <b><u>Correo:</u></b><br>'.$email.'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 18px; mso-line-height-rule: exactly; color: #434343; padding: 0px 0px 14px;">
                                                    <b><u>Teléfono:</u></b><br>'.$tel.'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 18px; mso-line-height-rule: exactly; color: #434343; padding: 0px 0px 14px;">
                                                    <b><u>Mensaje:</u></b><br>'.$message.'
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <!-- /Body content -->
                                <!-- Footer -->
                                <tr>
                                    <td align="center" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 18px; mso-line-height-rule: exactly; background-color: #434343; color: #ffffff; padding: 25px;">
                                        Academia&nbsp;Adaggio &copy;&nbsp;'.date("Y").' Todos&nbsp;los&nbsp;derechos&nbsp;reservados
                                    </td>
                                </tr>
                                <!-- /Footer -->
                            </table>
                        </td>
                    </tr>
                    <!-- /Email content -->
                </table>
                <!-- /Table -->
            </body>
        </html>
    ';
    
    $send = mail($to, $subject, $body, $headers);
    
    if ($send) {
        include_once ('insert_contact.php');
        header('Location: https://academia-adaggio.com/prueba.html?send=true');
    }else {
        header('Location: https://academia-adaggio.com/prueba.html#contact?send=false');
    }
?>