//#include <iostream>
//#include <string>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 7\n";
//    return 0;
//
//}
//
//class Vehicle {
//
//public:
//    void move() {
//        cout << "Vehicle is moving\n";
//    }
//};
//
//class Car :public Vehicle {
//public:
//	void move() {
//        cout << "Car is moving";
//    }
//};
//
//int l7Q1() {
//    cout << "Inheritance\n";
//    Vehicle v1;
//    Car c1;
//    v1.move();
//    c1.move();
//	return 0;
//}
//
//class Person {
//public:
//	string name;
//	double age;
//    Person(string n, double a) {
//        name = n;
//        age = a;
//    }
//    };
//
//class Student :public Person {
//public:
//    string studentId;
//	Student(string n, double a, string id) :Person(n, a) {
//		studentId = id;
//	}
//};
//int l7Q2() {
//	cout << "Constructor in Derived Class\n";
//    cout << "Student\n";
//	Student s1("Syed", 20, "S11234");
//	cout << s1.name << " " << s1.age << " " << s1.studentId << "\n";
//    cout << "Person\n";
//	Person p1("Syed", 20);
//	cout << p1.name << " " << p1.age << "\n";
//    return 0;
//}
//
////class Shape {
////
////public:
////    void draw() {
////        cout << "Drawing Shape\n";
////    }
////};
////
////class Circle :public Shape {
////public:
////	void draw() {
////		cout << "Drawing Circle\n";
////	}
////
////};
////
////class Square :public Shape {
////
////public: 
////	void draw() {
////		cout << "Drawing Square\n";
////	}
////};
////
////int l7Q3() {
////	cout << "Polymorphism\n";
////	Shape s1;
////	Circle c1;
////	Square sq1;
////	s1.draw();
////	c1.draw();
////	sq1.draw();
////    return 0;
////}
//
//
//class Base {
//private:
//	string privateVar="Private Data";
//protected:
//	string protectedVar="Protected Data";
//public:
//	string publicVar = "Public Data";
//		string getPrivate() {
//		return privateVar;
//	}
//};
//
//class Derived :public Base {
//public:
//	void display() {
//		cout << "Public could be accessed. " << publicVar<<endl;
//		cout << "Protected could be accessed. " << protectedVar<<endl;
//		cout << "Public could only be accessed by a getter method. Direct accessing lead to error. " << getPrivate();
//	}
//};
//
//
//int l7Q4() {
//
//	cout << "Access Modifiers\n";
//	Derived d1;
//	d1.display();
//	return 0;
//}
//
//class Shape {
//protected:
//	string color;
//public:
//	Shape(string c) {
//		color = c;
//	}
//	virtual double area() = 0;
//	virtual void display() {
//		cout << "The color of Shape is " << color << endl;
//
//	}
//};
//
//class Rectangle :public Shape {
//	double width, height;
//public:
//	Rectangle(string c, double w, double h) :Shape(c) {
//	
//		width = w;	
//		height = h;
//	}
//	double area() override {
//		return width * height;
//	}
//	void display() override {
//		cout << "The color of Rectangle is " << color << endl;
//		cout << "The Width of Rectangle is " << width << endl;
//		cout << "The Height of Rectangle is " << height << endl;
//		cout << "The area of Rectangle is " << area() << endl;
//	}
//	};
//
//class Circle :public Shape {
//	double radius;
//public:
//	Circle(string c, double r) :Shape(c) {
//		radius = r;
//	}
//	double area() override {
//		return 3.14 * radius * radius;
//	}
//
//	void display() override {
//		cout << "The color of Circle is " << color << endl;
//		cout << "The Radius of Circle is " << radius << endl;
//		cout << "The area of Circle is " << area() << endl;
//	}
//};
//
//int l7Q5() {
//	cout << "Overriding Virtual Functions"<<endl;
//	Rectangle R1("Red",45.2,31);
//	Circle C1("Yellow", 5.1);
//	Shape* S1 = &R1;
//	Shape* S2 = &C1;
//	S1->display();
//	S2->display();
//
//	return 0;
//}
//
//int main() {
//    intro();
//	l7Q5();
//    return 0;
//}
