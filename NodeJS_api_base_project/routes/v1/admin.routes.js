const express = require('express');
const router = express.Router();
const {
    adminpanelController,
} = require('../../controllers');
const oauth = require('../../middlewares/oauth');
const validator = require('../../middlewares/validator');
const { FileUploader } = require('../../middlewares/file_uploader');

/**
 * @swagger
 * /apis/v1/admin/login:
 *   post:
 *     summary:  Admin Login API.
 *     tags:
 *      - Admin 
 *     parameters:
 *      - in: body
 *        description: User Credentials
 *        name: Parameters
 *        schema:
 *         type: object
 *         required:
 *          - user_name
 *          - password
 *         properties:
 *          user_name:
 *           type: string
 *           example: teacher_123
 *          password:
 *           type: string
 *           example: instrucko
 *     responses:
 *       200:
 *        description: OK
 *       400:
 *        description: Bad request.
 *       401:
 *        description: Authorization information is missing or invalid.
 *       404:
 *        description:  Not found.
 */

router.post('/login', validator('login'), adminpanelController.login);
module.exports = router;