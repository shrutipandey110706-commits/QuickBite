from django.db import models


class Canteen(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    opening_time = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    student_id = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    canteen = models.ForeignKey(Canteen, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    category = models.CharField(max_length=100)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Order(models.Model):

    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Preparing', 'Preparing'),
        ('Ready', 'Ready'),
        ('Delivered', 'Delivered'),
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    canteen = models.ForeignKey(Canteen, on_delete=models.CASCADE)

    total_price = models.IntegerField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Pending'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id}"