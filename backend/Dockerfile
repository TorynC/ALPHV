# Use official Python 3.11 image as base
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy requirements.txt to container
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy all your app code into container
COPY . .

# Expose port 8000 (Django default dev server port)
EXPOSE 8000

# Start Django server on all network interfaces
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
