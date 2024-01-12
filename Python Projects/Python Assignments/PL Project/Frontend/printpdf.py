from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

def generate_receipt(file_path, patient_id, patient_name, age, gender, appointment_date, appointment_time, doctor_name):
    pdf = canvas.Canvas(file_path, pagesize=letter)

    # Set font and font size
    pdf.setFont("Helvetica-Bold", 16)  # Making the hospital name bold
    pdf.drawCentredString(300, 770, "YourCare Center")

    pdf.setFont("Helvetica", 12)

    # Add receipt header
    pdf.line(50, 755, 550, 755)

    # Add patient information
    pdf.drawString(50, 735, f"Patient ID: {patient_id}")
    pdf.drawString(50, 720, f"Patient: {patient_name}")
    pdf.drawString(50, 705, f"Age: {age}")
    pdf.drawString(50, 690, f"Gender: {gender}")

    # Add second column for appointment date and time
    pdf.drawString(300, 735, f"Appointment Date: {appointment_date}")
    pdf.drawString(300, 720, f"Appointment Time: {appointment_time}")

    # Add doctor information
    pdf.drawString(50, 670, f"Doctor: {doctor_name}")


    # Add total amount
    pdf.drawString(50, 630, f"Total Amount: {1000}Rs")

    # Draw a line before the footer
    pdf.line(50, 60, 550, 60)

    # Add receipt footer
    pdf.drawString(50, 40, "Thank you for choosing our hospital!")

    # Save the PDF document
    pdf.save()

#
#
# receipt_info = {
#         'hospital_name': 'Your Hospital Name',
#         'patient_id': '123456',
#         'patient_name': 'John Doe',
#         'age': 30,
#         'gender': 'Male',
#         'appointment_date': '2024-01-13',
#         'appointment_time': '10:00 AM',
#         'doctor_name': 'Dr. Smith',
#         'doctor_timings': '9:00 AM - 5:00 PM',
#         'total_amount': 150
#     }
#
# output_file = "hospital_receipt_with_id.pdf"
# generate_receipt(output_file, **receipt_info)
# print(f"Receipt generated successfully: {output_file}")