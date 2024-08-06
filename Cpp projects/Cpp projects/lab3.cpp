//#include <iostream>
//#include <string>
//using namespace std;
//int intro() {
//	cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//	cout << "Lab 3\n\n";
//	return 0;
//}
//
//int l3Q1() {
//	struct Person {
//		string name;
//		int age;
//	};
//
//	Person p1;
//	p1.name = "Syed Muhammad Hussain";
//	p1.age = 18;
//	cout << "Person Details"<<endl;
//	cout << "Name: " << p1.name<<endl;
//	cout << "Age: " << p1.age;
//	return 0;
//}
//int l3Q2() {
//	struct Rectangle{
//	float length;
//	float width;
//	};
//
//	Rectangle R1;
//	cout << "Enter width of Rectangle: ";
//	cin >> R1.width;
//	cout << "Enter length of Rectangle: ";
//	cin >> R1.length;
//	float area = R1.length * R1.width;
//	cout << "Area of Rectangle: " << area;
//	return 0;
//}
//void swap(int &a, int &b) {
//	int temp = a;
//	a = b;
//	b = temp;
//}
//int l3Q3() {
//	struct Number {
//		int num;
//	};
//	Number n1, n2;
//	cout << "Enter values of Number 1 and Number 2: " << endl;
//	cin >> n1.num >> n2.num;
//	swap(n1.num,n2.num);
//	cout << "After swapping Number 1 is " << n1.num << " and Number 2 is " << n2.num;
//	return 0;
//}
//int l3Q4() {
//	struct Student {
//		int rollNo;
//		string name;
//		int age;
//		float marks;
//	};
//	float max = 0;
//	int maxid;
//	Student students[3];
//	for (int i = 0; i < 3; i++)
//	{
//		cout << "Enter Student " << i + 1 << " name: ";
//		cin >> students[i].name;
//		cout << "\nEnter Student " << i + 1 << " Roll no: ";
//		cin >> students[i].rollNo;
//		cout << "\nEnter Student " << i + 1 << " age: ";
//		cin >> students[i].age;
//		cout << "\nEnter Student " << i + 1 << " marks: ";
//		cin >> students[i].marks;
//		if (students[i].marks > max) {
//			max = students[i].marks;
//			maxid = i;
//		}
//	}
//
//	for (int i = 0; i < 3; i++)
//	{
//		cout << "\nDetails of Student " << i + 1<<endl;
//		cout << "Name: " << students[i].name;
//		cout << "\nRoll no: " << students[i].rollNo;
//		cout << "\nAge: " << students[i].age;
//		cout << "\nMarks: " << students[i].marks;
//	}
//
//	cout << "\nDetails of Student with Highest marks" << endl;
//	cout << "Name: " << students[maxid].name;
//	cout << "\nRoll no: " << students[maxid].rollNo;
//	cout << "\nAge: " << students[maxid].age;
//	cout << "\nMarks: " << students[maxid].marks;
//	return 0;
//}
//int l3Q5() {
//	struct Employee {
//		int employeeid;
//		string name;
//		string department;
//		float salary;
//	};
//	Employee employees[5];
//	float sumsalary = 0;
//	float averageSalary=0;
//	for (int i = 0; i < 5; i++)
//	{
//		cout << "\nEnter Employee " << i + 1 << " name: ";
//		cin >> employees[i].name;
//		cout << "\nEnter Employee " << i + 1 << " id: ";
//		cin >> employees[i].employeeid;
//		cout << "\nEnter Employee " << i + 1 << " department: ";
//		cin >> employees[i].department;
//		cout << "\nEnter Employee " << i + 1 << " salary: ";
//		cin >> employees[i].salary;
//		sumsalary += employees[i].salary;
//	}
//
//	for (int i = 0; i < 5; i++)
//	{
//		cout << "\nDetails of Employee " << i + 1 << endl;
//		cout << "Name: " << employees[i].name;
//		cout << "\nID: " << employees[i].employeeid;
//		cout << "\nDepartment: " << employees[i].department;
//		cout << "\nSalary: " << employees[i].salary<<endl;
//	}
//	averageSalary = sumsalary / 5;
//	cout << "\nAverage Salary of Employees is " << averageSalary;
//	return 0;
//}
//int l3Q6() {
//	struct Books {
//		string title;
//		string author;
//		string genre;
//		int yearOfPublication;
//	};
//	Books book[3];
//	int minyear = 2024;
//	int minid = 0;
//	for (int i = 0; i < 3; i++)
//	{
//		cout << "\nEnter Book " << i + 1 << " title: ";
//		getline(cin, book[i].title);
//		cout << "\nEnter Book " << i + 1 << " author: ";
//		getline(cin, book[i].author);
//		cout << "\nEnter Book " << i + 1 << " genre: ";
//		getline(cin, book[i].genre);
//		cout << "\nEnter Book " << i + 1 << " year of publication: ";
//		cin >> book[i].yearOfPublication;
//		cin.ignore();
//		if (book[i].yearOfPublication < minyear) {
//			minyear = book[i].yearOfPublication;
//			minid = i;
//		}
//	}
//
//	for (int i = 0; i < 3; i++)
//	{
//		cout << "\nDetails of Books " << i + 1 << endl;
//		cout << "Title: " << book[i].title;
//		cout << "\nAuthor: " << book[i].author;
//		cout << "\nGenre: " << book[i].genre;
//		cout << "\nYear of Publication: " << book[i].yearOfPublication << endl;
//	}
//
//	cout << "\nDetails of Books with earliest publication year" << minid + 1 << endl;
//	cout << "Title: " << book[minid].title;
//	cout << "\nAuthor: " << book[minid].author;
//	cout << "\nGenre: " << book[minid].genre;
//	cout << "\nYear of Publication: " << book[minid].yearOfPublication << endl;
//	return 0;
//}
//int l3Q7() {
//	struct Product {
//		string productName;
//		float price;
//		int quantity;
//	};
//
//	Product p1;
//	float totalcost;
//	cout << "Enter name of Product: ";
//	cin >> p1.productName;
//	cout << "Enter price of Product: ";
//	cin >> p1.price;
//	cout << "Enter quantity of Product: ";
//	cin >> p1.quantity;
//	totalcost = p1.price * p1.quantity;
//	cout << "Total cost of this product is " << totalcost;
//	return 0;
//}
//int main() {
//	intro();
//	l3Q7();
//
//	return 0;
//}