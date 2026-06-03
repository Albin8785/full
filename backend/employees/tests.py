from django.test import TestCase
from .models import Employee


class EmployeeModelTest(TestCase):

    def test_employee_creation(self):

        employee = Employee.objects.create(
            name="Albin",
            role="Backend Developer"
        )

        self.assertEqual(
            employee.name,
            "Albin"
        )