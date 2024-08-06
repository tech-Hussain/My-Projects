//#include <iostream>
//#include <string>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 6\n";
//    return 0;
//}
//class Rectangle {
//    float length, width;
//    public:
//        Rectangle(float l,float w):length(l),width(w){}
//        float area() {
//            return length*width;
//        }
//        float perimeter() {
//            return 2 * (length + width);
//        }
//        void setlength(float l) {
//            length=l;
//        }
//        void setwidth(float w) {
//            width=w;
//        }
//        
//};
//int l6Q1() {
//    float l=0, w=0;
//    Rectangle R1(l, w);
//    cout << "The program is to calculate Rectangle area and perimeter"<<endl;
//    cout << "Enter length: ";
//    cin >> l;
//    cout << "Enter width: ";
//    cin >> w;
//    R1.setlength(l);
//    R1.setwidth(w);
//    cout << "The Area of Rectangle is " << R1.area();
//    cout << "\nThe Perimeter of Rectangle is " << R1.perimeter();
//    return 0;
//}
//
//class Circle{
//    float radius;
//    const double PI = 3.14159265358979323846;
//    public:
//        Circle(float r):radius(r){}
//        double area() {
//            return PI * radius* radius;
//        }
//        double circumference() {
//            return 2 * PI * radius;
//        }
//        void setradius(float r) {
//            radius=r;
//        }
//};
//
//
//int l6Q2() {
//    float radius=0.0;
//    Circle c1(radius);
//    cout << "This Program is to calculate area and circumference of Circle"<<endl;
//    cout << "Enter radius of circle :";
//    cin >> radius;
//    c1.setradius(radius);
//    cout << "The Area of circle is: " << c1.area();
//    cout << "\nThe Circumference of circle is: " << c1.circumference();
//    return 0;
//}
//
//class Employee {
//    string name;
//    int salary;
//    public:
//        Employee(string s,int i):name(s),salary(i){ }
//        void displayDetails(){
//            cout << "Name of the Employee is " << name << " who earned salary Rs " << salary;
//        }
//        void setname(string n) {
//            name=n;
//        }
//        void setsalary(int s) {
//            salary = s;
//        }
//};
//
//int l6Q3() {
//    string name="";
//    int salary=0;
//    Employee e1(name, salary);
//    cout << "This program is to display details of a Employee" << endl;
//    cout << "Enter name of Employee: " ;
//    getline(cin, name);
//    cout << "Enter salary: ";
//    cin >> salary;
//    e1.setname(name);
//    e1.setsalary(salary);
//    cout << "The details are:\n";
//    e1.displayDetails();
//
//    return 0;
//}
//class BankAccount {
//    string accountNumber, accountHolder;
//    long balance;
//    public:
//        BankAccount(string n,string h,long b):accountNumber(n),accountHolder(h),balance(b){}
//        void setAccNumber(string n) {
//            accountNumber = n;
//        }
//        void setAccHolder(string h) {
//            accountHolder = h;
//        }
//        void setbalacnce(long b) {
//            balance = b;
//        }
//        void withdrawMoney(long b) {
//            if (b <= balance) {
//            balance -= b;
//            cout << "Successfully Withdrawn Rs" << b<<endl;
//            cout << "Your Updated Balance: " << balance;
//            }
//            else {
//                cout<<"Sorry!You are short of balance.";
//            }
//        }
//        void depositMoney(long b) {
//            balance += b;
//            cout << "Successfully deposited Rs " << b << endl;
//            cout << "Your Updated Balance: " << balance;
//        }
//};
//
//int l6Q4() {
//    string accNo="", accHolder="";
//    long balance=0,input;
//    int choice;
//    BankAccount Acc1(accNo, accHolder, balance);
//    cout << "This program is to assist you in managing your bank account\n";
//    cout << "Enter BankAccount Number: ";
//    getline(cin, accNo);
//    cout << "Enter BankAccount Holder Name: ";
//    getline(cin, accHolder);
//    cout << "Enter BankAccount Balance: ";
//    cin >> balance;
//    Acc1.setAccNumber(accNo);
//    Acc1.setAccHolder(accHolder);
//    Acc1.setbalacnce(balance);
//    cout << "Do you want to Withdraw or Deposit Money.\nPress 1 to Withdraw and 2 to deposit money: ";
//    cin >> choice;
//    if (choice == 1) {
//        cout << "How much Money you want to withdraw: ";
//        cin >> input;
//        Acc1.withdrawMoney(input);
//    }
//    else if (choice == 2) {
//        cout << "How much Money you want to deposit: ";
//        cin >> input;
//        Acc1.depositMoney(input);
//    }
//    else {
//        cout << "Wrong Choice.";
//    }
//    return 0;
//}
//
//class Car {
//    string brand,model;
//    int year;
//    public:
//        Car(string b , string m, int y):brand(b),model(m),year(y){}
//        void displayDetails() {
//            cout << "Details of Car:\n" << "Car Brand is " << brand << " of Model " << model<<" in Year "<<year;
//        }
//        void setbrand(string b) {
//            brand=b;
//        }
//        void setmodel(string m) {
//            model=m;
//        }
//        void setyear(int y) {
//            year=y;
//        }
//};
//int l6Q5() {
//    string brand="", model = "";
//    int year=0;
//    Car c1(brand, model, year);
//    cout << "The program is to display details of Car.\nNow input details: " << endl;
//    cout << "Enter Brand: ";
//    getline(cin, brand);
//    cout << "Enter Model: ";
//    getline(cin, model);
//    cout << "Enter Year: ";
//    cin >> year;
//    c1.setbrand(brand);
//    c1.setmodel(model);
//    c1.setyear(year);
//    c1.displayDetails();
//    return 0;
//}
//
//class Fraction {
//    int numerator, denominator;
//    public:
//        Fraction(int n, int d) :numerator(n), denominator(d) {}
//        void simplify() {
//            for (int i = denominator;i > 1; i--) {
//                if ((numerator%i == 0) && (denominator%i == 0)) {
//                    numerator = numerator / i;
//                    denominator = denominator / i;
//                }
//            }
//            cout << "After Simplification Now Fraction is: \n" << numerator << "\\" << denominator;
//        }
//        void setnumerator(int n) {
//            numerator=n;
//        }
//        void setdenominator(int n) {
//            denominator=n;
//        }
//        
//};
//int l6Q6() {
//    int n=0, d=0;
//    Fraction f1(n, d);
//    cout << "This program is to simplify fraction and then display it.\n";
//    cout << "Enter Numerator: ";
//    cin >> n;
//    cout << "Enter Denominator: ";
//    cin >> d;
//    f1.setnumerator(n);
//    f1.setdenominator(d);
//    f1.simplify();
//    return 0;
//}
//
//
//int main() {
//    intro();
//    l6Q6();
//    return 0;
//}