# Use official Python image
FROM python:3.12-slim

WORKDIR /app

COPY src/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source
COPY src/ .

EXPOSE 5000

# Command to run the app
CMD ["python", "run.py"]
