#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
//#include <string>
#include <cmath>
#include <cstring>
using namespace std;
//class Point {
//    friend double  p_to_p_distance(Point x, Point y);
//private:
//    int x, y;
//
//public:
//    Point(void) {
//        x = 0, y = 0;
//    }
//    Point(int a, int b) {
//        x = a, y = b;
//    }
//    void display_point(void) {
//        cout << "Point is Located at (" << x << "," << y << ")"<<endl;
//    }
//
//};
//
//double p_to_p_distance(Point a, Point b) {
//    return sqrt(pow((a.x-b.x),2)+pow((a.y-b.y),2));
//}

class Complex_No {
    int Real, Imaginary;
    public:
        Complex_No(int r, int i) :Real(r), Imaginary(i) {

        }
        Complex_No() {
        Real = 0;
        Imaginary = 0;
        }
        void Display() {
            cout << "Complex Number is " << Real << " + " << Imaginary << "i"<<endl;
        }
        float Magnitude() {
            return sqrt(pow(Real,2)+pow(Imaginary,2));
        }
        Complex_No operator + ( Complex_No &obj) {
            Complex_No C4;
            C4.Real = Real + obj.Real;
            C4.Imaginary = Imaginary + obj.Imaginary;
            return C4;

        }

};



//bool ispalindrome(int x) {
//    string a = to_string(x);
//    int length = a.length();
//    string dupl;
//    for (int i = length - 1;i >= 0;i--) {
//        dupl += a[i];
//    }
//    if (a == dupl) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}

//void multiplyArr(int* ptr1, int* ptr2) {
//
//    int c = 0;
//    for (int i = 0;i < 5; i++) {
//        c = (*ptr1) * (*ptr2);
//        cout << "Answer is " << c << endl;
//        ptr1++;
//        ptr2++;
//    }
//}

void swap1(int * a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}

class Person {
public:
    string name;
    int age;
    Person(const char* n, int a) {
        name = n;
        age = a;
    }

    Person& show(){
        cout << name<<endl;
        cout << age<<endl;
        return *this;
    }
    Person& setage(int age) {
        this->age = age;
        return *this;
    }
};

//int main() {
//    //// Write C++ code here
//    Person P1("Hussain", 14);
//    Person P2("Hammad", 15);
//    Person P3=P1.show().setage(45);
//    cout << "Hi";
//    P1.show();
//    P3.show();
//    return 0;
//}

