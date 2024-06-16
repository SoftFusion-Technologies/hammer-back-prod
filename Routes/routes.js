/*
  * Programador: Benjamin Orellana
  * Fecha Cración: 15 /03 / 2024
  * Versión: 1.0
  *
  * Descripción:
    *Este archivo (routes.js) define las rutas HTTP para operaciones CRUD en la tabla
  * Tema: Rutas
  
  * Capa: Backend 
*/

import express from 'express'; // Importa la librería Express

import {
  OBR_Trabajo_CTS,
  OBRS_Trabajo_CTS,
  CR_Trabajo_CTS,
  ER_Trabajo_CTS
  // Importa los controladores necesarios para la tabla trabajo_CTS - tb_1
} from '../Controllers/CTS_TB_FailedJobs.js';

import {
  // Importa los controladores necesarios para la tabla frec_asks tb_2
  OBR_FrecAsk_CTS,
  OBRS_FrecAsk_CTS,
  CR_FrecAsk_CTS,
  ER_FrecAsk_CTS
 } from '../Controllers/CTS_TB_FrecAsk.js';

import {
  OBR_Migration_CTS,
  OBRS_Migration_CTS,
  CR_Migration_CTS,
  ER_Migration_CTS
  // Importa los controladores necesarios para la tabla migrations tb_3
 } from '../Controllers/CTS_TB_Migrations.js';
  
import {
  OBR_Notifications_CTS,
  OBRS_Notifications_CTS,
  CR_Notifications_CTS,
  ER_Notifications_CTS
  // Importa los controladores necesarios para la tabla Notifications - tb_4
} from '../Controllers/CTS_TB_Notifications.js';

import {
  OBR_Novedades_CTS,
  OBRS_Novedades_CTS,
  CR_Novedades_CTS,
  ER_Novedades_CTS,
  UR_Novedades_CTS
  // Importa los controladores necesarios para la tabla Novedades - tb_5
} from '../Controllers/CTS_TB_Novedades.js';

import {
  OBR_NovedadUser_CTS,
  OBRS_NovedadUser_CTS,
  CR_NovedadUser_CTS,
  ER_NovedadUser_CTS
  // Importa los controladores necesarios para la tabla NovedadUser - tb_6
} from '../Controllers/CTS_TB_NovedadUser.js';

import {
  OBR_NovedadUserDestino_CTS,
  OBRS_NovedadUserDestino_CTS,
  CR_NovedadUserDestino_CTS,
  ER_NovedadUserDestino_CTS
  // Importa los controladores necesarios para la tabla NovedadUserDestino - tb_7
} from '../Controllers/CTS_TB_NovedadUserDestino.js';

import {
  OBR_PassReset_CTS,
  OBRS_PassReset_CTS,
  CR_PassReset_CTS,
  ER_PassReset_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_8
} from '../Controllers/CTS_TB_PassReset.js';

import {
  OBR_PersonalAccessTokens_CTS,
  OBRS_PersonalAccessTokens_CTS,
  CR_PersonalAccessTokens_CTS,
  ER_PersonalAccessTokens_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_9
} from '../Controllers/CTS_TB_PersonalAccessTokens.js';

import {
  OBR_Postulante_CTS,
  OBRS_Postulante_CTS,
  CR_Postulante_CTS,
  ER_Postulante_CTS,
  UR_Postulante_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_10
} from '../Controllers/CTS_TB_Postulante.js';

import {
  OBR_SchedulerTaskUser_CTS,
  OBRS_SchedulerTaskUser_CTS,
  CR_SchedulerTaskUser_CTS,
  ER_SchedulerTaskUser_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_11
} from '../Controllers/CTS_TB_SchedulerTaskUser.js';

import {
  OBR_SchedulerTask_CTS,
  OBRS_SchedulerTask_CTS,
  CR_SchedulerTask_CTS,
  ER_SchedulerTask_CTS,
  UR_SchedulerTask_CTS

  // Importa los controladores necesarios para la tabla password_reset - tb_12
} from '../Controllers/CTS_TB_SchedulerTask.js';

import {
  OBR_TestClass_CTS,
  OBRS_TestClass_CTS,
  CR_TestClass_CTS,
  ER_TestClass_CTS,
  UR_TestClass_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_13
} from '../Controllers/CTS_TB_TestClass.js';

import {
  OBR_TextContents_CTS,
  OBRS_TextContents_CTS,
  CR_TextContents_CTS,
  ER_TextContents_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_14
} from '../Controllers/CTS_TB_TextContents.js';

import {
  OBR_Users_CTS,
  OBRS_Users_CTS,
  CR_Users_CTS,
  ER_Users_CTS,
  UR_Users_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_15
} from '../Controllers/CTS_TB_Users.js';

// PARTE NUEVA CONVENIOS

import {
  OBR_AdmConve_CTS,
  OBRS_AdmConve_CTS,
  CR_AdmConve_CTS,
  ER_AdmConve_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_15
} from '../Controllers/CTS_TB_AdmConve.js';


import {
  OBR_IntegrantesConve_CTS,
  OBRS_IntegrantesConve_CTS,
  CR_IntegrantesConve_CTS,
  ER_IntegrantesConve_CTS,
  UR_IntegrantesConve_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_15
} from '../Controllers/CTS_TB_IntegrantesConve.js';

import {
  OBR_ImagenConve_CTS,
  OBRS_ImagenConve_CTS,
  CR_ImagenConve_CTS,
  ER_ImagenConve_CTS,
  cargarImagen
  // Importa los controladores necesarios para la tabla password_reset - tb_15
} from '../Controllers/CTS_TB_ImagesConve.js';

import {
  OBR_FamIntegrante_CTS,
  OBRS_FamIntegrante_CTS,
  CR_FamIntegrante_CTS,
  ER_FamIntegrante_CTS,
  UR_FamIntegrante_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_15
} from '../Controllers/CTS_TB_FamIntegrante.js';

// NUEVA PARTE DE ADMINISTRACION DE PRECIOS PARA CONVENIOS

import {
  OBR_AdmPrecio_CTS,
  OBRS_AdmPrecio_CTS,
  CR_AdmPrecio_CTS,
  ER_AdmPrecio_CTS
  // Importa los controladores necesarios para la tabla password_reset - tb_15
} from '../Controllers/CTS_TB_AdmPrecio.js';



// Crea un enrutador de Express
const router = express.Router();

// Define las rutas para cada método del controlador

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de Trabajo_CTS - tb_1
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de Trabajo_CTS

router.get('/jobs', OBRS_Trabajo_CTS);

// Ruta para obtener un registro específico de Trabajo_CTS_CTS por su ID
router.get('/jobs/:id', OBR_Trabajo_CTS);

// Ruta para crear un nuevo registro en Trabajo_CTS_CTS
router.post('/jobs', CR_Trabajo_CTS);

// Ruta para eliminar un registro en Trabajo_CTS_CTS por su ID
router.delete('/jobs/:id', ER_Trabajo_CTS);


// ----------------------------------------------------------------
// Ruta para obtener todos los registros de frec_asks tb_2
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de FrecAsk_CTS

router.get('/ask', OBRS_FrecAsk_CTS);

// Ruta para obtener un registro específico de FrecAsk_CTS por su ID
router.get('/ask/:id', OBR_FrecAsk_CTS);

// Ruta para crear un nuevo registro en FrecAsk_CTS
router.post('/ask', CR_FrecAsk_CTS);

// Ruta para eliminar un registro en FrecAsk_CTS por su ID
router.delete('/ask/:id', ER_FrecAsk_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de migration tb_3
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de Notifications

router.get('/notifications', OBRS_Notifications_CTS);

// Ruta para obtener un registro específico de Notifications por su ID
router.get('/notifications/:id', OBR_Notifications_CTS);

// Ruta para crear un nuevo registro en Notifications
router.post('/notifications', CR_Notifications_CTS);

// Ruta para eliminar un registro en Notifications por su ID
router.delete('/notifications/:id', ER_Notifications_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de notifications tb_4
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de Notifications

router.get('/migrations', OBRS_Migration_CTS);

// Ruta para obtener un registro específico de Notifications por su ID
router.get('/migrations/:id', OBR_Migration_CTS);

// Ruta para crear un nuevo registro en Notifications
router.post('/migrations', CR_Migration_CTS);

// Ruta para eliminar un registro en Notifications por su ID
router.delete('/migrations/:id', ER_Migration_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de Novedades tb_5
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de Novedades

router.get('/novedades', OBRS_Novedades_CTS);

// Ruta para obtener un registro específico de Novedades por su ID
router.get('/novedades/:id', OBR_Novedades_CTS);

// Ruta para crear un nuevo registro en Novedades
router.post('/novedades', CR_Novedades_CTS);

// Ruta para eliminar un registro en Novedades por su ID
router.delete('/novedades/:id', ER_Novedades_CTS);

// Ruta para actualizar un registro en Novedades por su ID
router.put('/novedades/:id', UR_Novedades_CTS);


// ----------------------------------------------------------------
// Ruta para obtener todos los registros de NovedadUser tb_6
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de NovedadUser

router.get('/novedaduser', OBRS_NovedadUser_CTS);

// Ruta para obtener un registro específico de Novedad por su ID
router.get('/novedaduser/:id', OBR_NovedadUser_CTS);

// Ruta para crear un nuevo registro en Novedad
router.post('/novedaduser', CR_NovedadUser_CTS);

// Ruta para eliminar un registro en Novedad por su ID
router.delete('/novedaduser/:id', ER_NovedadUser_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de NovedadUserDestino tb_7
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de NovedadUserDestino

router.get('/novedaduserdestino', OBRS_NovedadUserDestino_CTS);

// Ruta para obtener un registro específico de NovedadUser por su ID
router.get('/novedaduserdestino/:id', OBR_NovedadUserDestino_CTS);

// Ruta para crear un nuevo registro en NovedadUser
router.post('/novedaduserdestino', CR_NovedadUserDestino_CTS);

// Ruta para eliminar un registro en NovedadUser por su ID
router.delete('/novedaduserdestino/:id', ER_NovedadUserDestino_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de PassReset tb_8
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de PassReset

router.get('/passreset', OBRS_PassReset_CTS);

// Ruta para obtener un registro específico de PassReset por su ID
router.get('/passreset/:id', OBR_PassReset_CTS);

// Ruta para crear un nuevo registro en PassReset
router.post('/passreset', CR_PassReset_CTS);

// Ruta para eliminar un registro en PassReset por su ID
router.delete('/passreset/:id', ER_PassReset_CTS);


// ----------------------------------------------------------------
// Ruta para obtener todos los registros de PersonalAccessTokens tb_9
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de PersonalAccessTokens

router.get('/personalaccess', OBRS_PersonalAccessTokens_CTS);

// Ruta para obtener un registro específico de PersonalAccessTokens por su ID
router.get('/personalaccess/:id', OBR_PersonalAccessTokens_CTS);

// Ruta para crear un nuevo registro en PersonalAccessTokens
router.post('/personalaccess', CR_PersonalAccessTokens_CTS);

// Ruta para eliminar un registro en PersonalAccessTokens por su ID
router.delete('/personalaccess/:id', ER_PersonalAccessTokens_CTS);
// ----------------------------------------------------------------
// Ruta para obtener todos los registros de Postulante_CTS tb_10
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de Postulante

router.get('/postulantes', OBRS_Postulante_CTS);

// Ruta para obtener un registro específico de Postulante_CTS por su ID
router.get('/postulantes/:id', OBR_Postulante_CTS);

// Ruta para crear un nuevo registro en Postulante_CTS
router.post('/postulantes', CR_Postulante_CTS);

// Ruta para eliminar un registro en Postulante_CTS por su ID
router.delete('/postulantes/:id', ER_Postulante_CTS);

router.put('/postulantes/:id', UR_Postulante_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de SchedulerTaskUser tb_11
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de SchedulerTaskUser

router.get('/schedulertaskuser', OBRS_SchedulerTaskUser_CTS);

// Ruta para obtener un registro específico de SchedulerTaskUser por su ID
router.get('/schedulertaskuser/:id', OBR_SchedulerTaskUser_CTS);

// Ruta para crear un nuevo registro en SchedulerTaskUser
router.post('/schedulertaskuser', CR_SchedulerTaskUser_CTS);

// Ruta para eliminar un registro en SchedulerTaskUser por su ID
router.delete('/schedulertaskuser/:id', ER_SchedulerTaskUser_CTS);



// ----------------------------------------------------------------
// Ruta para obtener todos los registros de SchedulerTask tb_12
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de SchedulerTaskUser

router.get('/schedulertask', OBRS_SchedulerTask_CTS);

// Ruta para obtener un registro específico de SchedulerTask por su ID
router.get('/schedulertask/:id', OBR_SchedulerTask_CTS);

// Ruta para crear un nuevo registro en SchedulerTask
router.post('/schedulertask', CR_SchedulerTask_CTS);

// Ruta para eliminar un registro en SchedulerTask por su ID
router.delete('/schedulertask/:id', ER_SchedulerTask_CTS);


// Ruta para actualizar un registro en SchedulerTask por su ID
router.put('/schedulertask/:id', UR_SchedulerTask_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de TestClass_CTS tb_13
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de TestClass_CTS

router.get('/testclass', OBRS_TestClass_CTS);

// Obtener un registro específico de TestClass_CTS por su ID
router.get('/testclass/:id', OBR_TestClass_CTS);

// Crear un nuevo registro en TestClass_CTS
 router.post('/testclass', CR_TestClass_CTS);

// Eliminar un registro en TestClass_CTS por su ID
router.delete('/testclass/:id', ER_TestClass_CTS);
// Actualizar un registro en TestClass_CTS por su ID
router.put('/testclass/:id', UR_TestClass_CTS);


// ----------------------------------------------------------------
// Ruta para obtener todos los registros de TextContents_CTS tb_14
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de TextContents_CTS

router.get('/textcontents', OBRS_TextContents_CTS);

// Obtener un registro específico de TextContents_CTS por su ID
router.get('/textcontents/:id', OBR_TextContents_CTS);

// Crear un nuevo registro en TextContents_CTS
 router.post('/textcontents', CR_TextContents_CTS);

// Eliminar un registro en TextContents_CTS por su ID
router.delete('/textcontents/:id', ER_TextContents_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de Users_CTS tb_15
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de Users_CTS

router.get('/users', OBRS_Users_CTS);

// Obtener un registro específico de Users_CTS por su ID
router.get('/users/:id', OBR_Users_CTS);

// Crear un nuevo registro en Users_CTS
 router.post('/users', CR_Users_CTS);

// Eliminar un registro en Users_CTS por su ID
router.delete('/users/:id', ER_Users_CTS);

// Actualizar un registro en Users_CTS por su ID
router.put('/users/:id', UR_Users_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de AdmConve tb_15
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de AdmConve

router.get('/admconvenios', OBRS_AdmConve_CTS);

// Obtener un registro específico de AdmConve por su ID
router.get('/admconvenios/:id', OBR_AdmConve_CTS);

// Crear un nuevo registro en AdmConve
 router.post('/admconvenios', CR_AdmConve_CTS);

// Eliminar un registro en AdmConve por su ID
router.delete('/admconvenios/:id', ER_AdmConve_CTS);


// ----------------------------------------------------------------
// Ruta para obtener todos los registros de IntegrantesConve tb_15
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de IntegrantesConve

router.get('/integrantes', OBRS_IntegrantesConve_CTS);

// Obtener un registro específico de IntegrantesConve por su ID
router.get('/integrantes/:id', OBR_IntegrantesConve_CTS);

// Crear un nuevo registro en IntegrantesConve
 router.post('/integrantes', CR_IntegrantesConve_CTS);

// Eliminar un registro en IntegrantesConve por su ID
router.delete('/integrantes/:id', ER_IntegrantesConve_CTS);

// Actualizar un registro en IntegrantesConve por su ID
router.put('/integrantes/:id', UR_IntegrantesConve_CTS);


router.get('/imagenes', OBRS_ImagenConve_CTS);

// Obtener un registro específico de ImagesConve por su ID
router.get('/imagenes/:id', OBR_ImagenConve_CTS);

// Crear un nuevo registro en ImagesConve
router.post('/imagenes', CR_ImagenConve_CTS);

// Eliminar un registro en ImagesConve por su ID
router.delete('/imagenes/:id', ER_ImagenConve_CTS);

router.post('/subir-imagen', cargarImagen);


router.get('/integrantesfam', OBRS_FamIntegrante_CTS);

// Obtener un registro específico de FamIntegrante por su ID
router.get('/integrantesfam/:id', OBR_FamIntegrante_CTS);

// Crear un nuevo registro en FamIntegrante
router.post('/integrantesfam', CR_FamIntegrante_CTS);

// Eliminar un registro en FamIntegrante por su ID
router.delete('/integrantesfam/:id', ER_FamIntegrante_CTS);

// Actualizar un registro en FamIntegrante por su ID
router.put('/integrantesfam/:id', UR_FamIntegrante_CTS);

// ----------------------------------------------------------------
// Ruta para obtener todos los registros de AdmPrecio tb_15
// ----------------------------------------------------------------
// Define las rutas para cada método del controlador de AdmPrecio

router.get('/admprecio', OBRS_AdmPrecio_CTS);

// Obtener un registro específico de AdmPrecio por su ID
router.get('/admprecio/:id', OBR_AdmPrecio_CTS);

// Crear un nuevo registro en AdmPrecio
 router.post('/admprecio', CR_AdmPrecio_CTS);

// Eliminar un registro en AdmPrecio por su ID
router.delete('/admprecio/:id', ER_AdmPrecio_CTS);


// Exporta el enrutador
export default router;