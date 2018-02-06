from django.test import TestCase

from types_management.models import InsuranceType
from types_management.views import *

class TypeManagementTestCase(TestCase):
    def setUp(self):
        schema1 = {
            'name': 'text',
            'age': 'number',
            'gender': 'ENUM_GENDER'
        }
        enums1 = [
            { 'name': 'ENUM_GENDER', 'values': [ 'male', 'female' ] }
        ]
        schema2 = {
            'model': 'text',
            'brand': 'text',
            'age': 'number',
        }
        self.id1 = InsuranceType.objects.create(
            name = 'Personal',
            schema = schema1,
            enums = enums1
        ).id
        self.id2 = InsuranceType.objects.create(
            name = 'Car',
            schema = schema2,
        ).id
        self.response1 = {
            'id': self.id1,
            'name': 'Personal',
            'schema': schema1,
            'enums': enums1
        }
        self.response2 = {
            'id': self.id2,
            'name': 'Car',
            'schema': schema2,
            'enums': []
        }

    def test_return_404_when_type_does_not_exist(self):
        self.assertEqual(get_type(None, -1).status_code, 404)

    def test_return_single_insurance_type(self):
        response = get_type(None, self.id1)
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            str(response.content, encoding = 'utf8'),
            self.response1
        )

    def test_return_all_insurance_types(self):
        response = get_all(None)
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            str(response.content, encoding = 'utf8'),
            [ self.response1, self.response2 ]
        )

