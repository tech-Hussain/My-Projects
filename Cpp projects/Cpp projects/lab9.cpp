//#include <iostream>
//#include <string>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 9\n";
//    return 0;
//
//}
//
//
//
//class Shape {
//public:
//    virtual double area() = 0;
//    virtual ~Shape() {}
//    };
//    
//class Rectangle :public Shape {
//    double width, height;
//    public:
//    	Rectangle( double w, double h) {
//    	
//    		width = w;	
//    		height = h;
//    	}
//    	double area() override {
//    		return width * height;
//    	}
//    	};
//    
//class Circle :public Shape {
//    double radius;
//    public:
//    	Circle( double r)  {
//    		radius = r;
//    	}
//    	double area() override {
//    		return 3.14 * radius * radius;
//    	}
//    };
//    
//
//
//int l9Q1() {
//    Rectangle R1(10, 5.1);
//    Circle C1(10.1);
//    cout << "The Rectangle's Area is " << R1.area() << endl;
//    cout << "The Circle's Area is " << C1.area();
//
//    return 0;
//
//}
//
//class Employee {
//protected:
//    double salary;
//public:
//    Employee(double s) {
//        salary = s;
//    }
//    virtual double calulateSalary() = 0;
//    virtual ~Employee() {}
//
//};
//
//class PermanentEmployee :public Employee {
//public:
//	PermanentEmployee(double s) : Employee(s) {}
//	double calulateSalary() override {
//        if (salary < 100000) {
//			return salary;
//        }
//        else if ((salary >= 100000) && (salary <= 500000)) {
//            return salary * 0.9;
//        }
//        else {
//            return salary * 0.8;
//        }
//	}
//};
//
//class ContractEmployee :public Employee {
//public:
//	ContractEmployee(double s) : Employee(s) {}
//	double calulateSalary() override {
//		if (salary < 100000) {
//			return salary * 0.9;
//		}
//		else if ((salary >= 100000) && (salary <= 500000)) {
//			return salary * 0.8;
//		}
//		else {
//			return salary * 0.7;
//		}
//	}
//};
//
//int l9Q2() {
//    PermanentEmployee e1(85000);
//	ContractEmployee e2(85000);
//    cout << "Permanent Employee with salary 85000 after deduction is ";
//	cout << e1.calulateSalary() << endl;
//    cout << "Contract Employee with salary 85000 after deduction is ";
//	cout << e2.calulateSalary() << endl;            
//    return 0;
//}
//
//class Vehicle {
//public:
//    virtual double fuelEfficiency() = 0;
//
//    virtual ~Vehicle() {}
//};
//
//
//class Car : public Vehicle {
//private:
//    double distance; 
//    double fuelConsumed; 
//
//public:
//    
//    Car(double d, double f) : distance(d), fuelConsumed(f) {}
//
//    
//    double fuelEfficiency() override {
//        return distance / fuelConsumed; 
//    }
//};
//
//
//class Truck : public Vehicle {
//private:
//    double distance; 
//    double fuelConsumed;
//
//public:
//    Truck(double d, double f) : distance(d), fuelConsumed(f) {}
//    double fuelEfficiency()  override {
//        return distance / fuelConsumed;
//    }
//};
//
//int l9Q3(){
//    Car car(500.0, 25.0); 
//    Truck truck(300.0, 40.0); 
//    cout << "Fuel efficiency of Car: " << car.fuelEfficiency() << " km/l" << endl;
//    cout << "Fuel efficiency of Truck: " << truck.fuelEfficiency() << " km/l" << endl;
//
//    return 0;
//}
//
//
//class Payment {
//public:
//    virtual void processPayment()  = 0;
//
//    virtual ~Payment() {}
//};
//
//class CreditCardPayment : public Payment {
//private:
//    string cardNumber;
//    string cardHolderName;
//    double amount;
//
//public:
//    CreditCardPayment( string cardNum,  string holderName, double amt) : cardNumber(cardNum), cardHolderName(holderName), amount(amt) {}
//
//    void processPayment()  override {
//        cout << "Processing credit card payment..." << endl;
//        cout << "Card Number: " << cardNumber << endl;
//        cout << "Card Holder: " << cardHolderName << endl;
//        cout << "Amount: Rs " << amount << endl;
//        cout << "Credit card payment processed successfully." << endl;
//    }
//};
//
//class PaypalPayment : public Payment {
//private:
//    string email;
//    double amount;
//
//public:
//    PaypalPayment( string emailAddr, double amt) : email(emailAddr), amount(amt) {}
//
//    void processPayment()  override {
//        cout << "Processing PayPal payment..." << endl;
//        cout << "Email: " << email << endl;
//        cout << "Amount: Rs " << amount << endl;
//        cout << "PayPal payment processed successfully." << endl;
//    }
//};
//
//int l9Q4() {
//    CreditCardPayment creditCard("1234-5678-9012-3456", "Syed Hussain", 150.0);
//    PaypalPayment paypal("syed@example.com", 200.0);
//
//    cout << "=== Processing Credit Card Payment ===" << endl;
//    creditCard.processPayment();
//
//    cout << "\n=== Processing PayPal Payment ===" << endl;
//    paypal.processPayment();
//
//    return 0;
//}
//
//class Animal {
//public:
//    virtual void makeSound()  = 0;
//
//    virtual ~Animal() {}
//};
//
//class Dog : public Animal {
//public:
//    void makeSound()  override {
//        cout << "Dog: Woof! Woof!" << endl;
//    }
//};
//
//class Cat : public Animal {
//public:
//    void makeSound()  override {
//        cout << "Cat: Meow! Meow!" << endl;
//    }
//};
//
//int l9Q5() {
//    Dog dog;
//    Cat cat;
//
//    cout << "=== Dog Sound ===" << endl;
//    dog.makeSound();
//
//    cout << "\n=== Cat Sound ===" << endl;
//    cat.makeSound();
//
//    return 0;
//}
//int main() {
//    intro();
//
//    l9Q5();
//
//
//    return 0;
//}
