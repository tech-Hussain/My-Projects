//#include <iostream>
//#include <string>
//#include <cmath>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 12\n";
//    return 0;
//
//}
//
//
//class Circle {
//private:
//    double radius;
//
//public:
//    Circle(double r) : radius(r) {}
//    friend double calculateArea(const Circle& c);
//};
//
//double calculateArea(const Circle& c) {
//    const double PI = 3.141592653589793;
//    return PI * c.radius * c.radius;
//}
//
//int l12Q1() {
//    Circle circle(5.0);
//    double area = calculateArea(circle);
//    cout << "The area of the circle is: " << area << endl;
//    return 0;
//}
//
//class Rectangle {
//private:
//    double length;
//    double width;
//
//public:
//    Rectangle(double l, double w) : length(l), width(w) {}
//    friend double calculatePerimeter(const Rectangle& r);
//};
//
//double calculatePerimeter(const Rectangle& r) {
//    return 2 * (r.length + r.width);
//}
//
//int l12Q2() {
//    Rectangle rect(10.0, 5.0);
//    double perimeter = calculatePerimeter(rect);
//    cout << "The perimeter of the rectangle is: " << perimeter << endl;
//
//    return 0;
//}
//
//int main() {
//    intro();
//    l12Q2();
//    return 0;
//}
