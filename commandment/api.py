# -*- coding: utf-8 -*-

from flask import Blueprint, current_app, app, request
from flask_rest_jsonapi import Api, ResourceDetail, ResourceList
from marshmallow_jsonapi.flask import Schema
from marshmallow_jsonapi import fields
from .database import db_session
from .models import Device, Certificate as DBCertificate, CertificateRequest as DBCSR
from .push import push_to_device

api_app = Blueprint('api_app', __name__)


# Schemas

class DeviceSchema(Schema):
    class Meta:
        type_ = 'device'
        self_view = 'device_detail'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'device_list'

    id = fields.Str(dump_only=True)
    name = fields.Str()


class CertificateSchema(Schema):
    class Meta:
        type_ = 'certificate'
        self_view = 'certificate_detail'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'certificate_list'

    id = fields.Str(dump_only=True)
    name = fields.Str()


class CertificateSigningRequestSchema(Schema):
    class Meta:
        type_ = 'certificate_signing_request'
        self_view = 'certificate_signing_request_detail'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'certificate_signing_request_list'


# Resource Managers

class DeviceList(ResourceList):
    schema = DeviceSchema
    data_layer = {'session': db_session, 'model': Device}


class DeviceDetail(ResourceDetail):
    schema = DeviceSchema
    data_layer = {'session': db_session,
                  'model': Device}


class CertificateList(ResourceList):
    schema = CertificateSchema
    data_layer = {'session': db_session, 'model': DBCertificate}


class CertificateDetail(ResourceDetail):
    schema = CertificateSchema
    data_layer = {'session': db_session, 'model': DBCertificate}


class CertificateSigningRequestList(ResourceList):
    schema = CertificateSigningRequestSchema
    data_layer = {'session': db_session, 'model': DBCSR}


class CertificateSigningRequestDetail(ResourceDetail):
    schema = CertificateSigningRequestSchema
    data_layer = {'session': db_session, 'model': DBCSR}


api = Api(api_app)
api.route(DeviceList, 'device_list', '/v1/devices')
api.route(DeviceDetail, 'device_detail', '/v1/devices/<int:id>')
api.route(CertificateList, 'certificate_list', '/v1/certificates')
api.route(CertificateDetail, 'certificate_detail', '/v1/certificates/<int:id>')
api.route(CertificateSigningRequestList, 'certificate_signing_request_list', '/v1/certificate_signing_requests')
api.route(CertificateSigningRequestDetail, 'certificate_signing_request_detail',
          '/v1/certificate_signing_requests/<int:id>')


@api_app.route('/v1/devices/<int:device_id>/push')
def push(device_id: int):
    device = db_session.query(Device).filter(Device.id == device_id).one()
    push_to_device(device)

#
# @api_app.route('/v1/push_certificates', methods=['POST'])
# def post_push_certificates():
#     """Upload a push certificate to the MDM.
#
#     :reqheader Accept: application/x-pkcs12
#     :resheader Content-Type: application/json
#     :statuscode 204: no error
#     :statuscode 400: invalid certificate supplied
#     """
#     pass


# @api_app.route('/v1/certificates/<int:certificate_id>', methods=['GET', 'PUT'])
# def certificate(certificate_id: int):
#     cert = db_session.query(DBCertificate).filter(DBCertificate.id == certificate_id).one()
#
#     if request.method == 'GET':
#         return cert.pem_certificate, 200, {'Content-Type': 'application/x-pem-file'}
#     else:
#         cert.pem_certificate = request.form['data']
#         cert.commit()
#
#         return None, 202
