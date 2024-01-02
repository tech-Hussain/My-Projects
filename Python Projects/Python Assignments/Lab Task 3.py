# Q1
# def linearVelocity(radius,angSpeed):
#     return radius*angSpeed
# angSpeed=10
# print(linearVelocity(0.5,angSpeed))
# print(linearVelocity(1,angSpeed))
# print(linearVelocity(3,angSpeed))

# Q2
# def linearRpm(radius,angSpeed):
#     import math
#     radiusMeter=radius/100
#     angvel=((angSpeed)/60)*2*math.pi
#     return round((radiusMeter*angvel),2)
# angularSpeed=5000
# print(linearRpm(5,angularSpeed))
# print(linearRpm(10,angularSpeed))

# Q3
# linearVelocity=10
# radius=0.3
# angVelocity=round((linearVelocity/radius),2)
# print("Angular Velocity is",angVelocity)

# Q4
# speedLinear=10
# rad=0.25
# velAngular=round((speedLinear/rad),2)
# print("Angular Velocity is",velAngular)

# Q5
# import math
# radiusM=0.2
# duration=10
# speRpm=120
# speRad=round(((speRpm/60)*2*math.pi),2)
# linVel=speRad*radiusM
# distance=linVel*duration
# print(distance)

# # Q6
# v1=50
# accele=10
# dur=2
# dist=round(((v1*dur)+(1/2)*accele*dur**2),2)
# print("Distance covered is",dist)

# # Q7
# import math
# height=100
# gravity=32
# initvel=0
# vFinal=((initvel**2)+2*gravity*height)
# vFinal=math.sqrt(vFinal)
# print("Final velocity before reaching ground is", vFinal)