//#include <iostream>
//#include <string>
//#include <cstdlib>
//#include <iomanip>
//using namespace std;
//
//int intro() {
//	cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//	cout << "Lab 2\n\n";
//	return 0;
//}
//
//int l2Q1() {
//	char inp;
//	cout << "Enter a character: ";
//	cin >> inp;
//	int ascii = int(inp);
//	if ((ascii >= 65) && (ascii <= 90)) {
//		cout << "It is a capital letter.";
//	}
//	else if ((ascii >= 97) && (ascii <= 122)) {
//		cout << "It is a small letter.";
//	}
//	else if ((ascii >= 48) && (ascii <= 57)) {
//		cout << "It is a digit.";
//	}
//	else {
//		cout << "It is a special character.";
//
//	}
//
//	return 0;
//}
//int l2Q2() {
//	int calls;
//	cout << "Enter number of calls: ";
//	cin >> calls;
//	if (calls <= 100) cout << 200;
//	else if (calls > 100 and calls <= 150) cout << 200 + (calls - 200) * 0.6;
//	else if (calls > 150 and calls <= 200) cout << 200 + (50) * 0.6 + (calls - 150) * 0.5;
//	else if (calls > 200) cout << 200 + (50) * 0.6 + (50) * 0.5 + (calls - 200) * 0.4;
//	return 0;
//
//}
//
//bool uppercase(string a) {
//	for (int i = 0; i < a.length(); i++)
//	{
//		if ((a[i] >= 65) && (a[i] <= 90)) return true;
//	}
//	return false;
//};
//bool lowercase(string a) {
//	for (int i = 0; i < a.length(); i++)
//	{
//		if ((a[i] >= 97) && (a[i] <= 122)) return true;
//	}
//	return false;
//};
//bool digit(string a) {
//	for (int i = 0; i < a.length(); i++)
//	{
//		if ((a[i] >= 48) && (a[i] <= 57)) return true;
//	}
//	return false;
//};
//bool specialcase(string a) {
//	for (int i = 0; i < a.length(); i++)
//	{
//		if (!(((a[i] >= 65) && (a[i] <= 90)) || ((a[i] >= 97) && (a[i] <= 122)) || ((a[i] >= 48) && (a[i] <= 57)))) return true;
//	}
//	return false;
//};
//int l2Q3() {
//	string pass;
//	cout << "Enter the password to check its strength: ";
//	cin >> pass;
//	if (pass.length() >= 8) {
//		if (uppercase(pass) && lowercase(pass) && digit(pass) && specialcase(pass)) cout << "Strong Password";
//		else cout << "Weak Password";
//	}
//	else {
//		cout << "It is a weak password.";
//
//	}
//	return 0;
//}
//int l2Q4() {
//	int choice;
//	const int steps = 2;
//	string input, newStr = "";
//	cout << "Do you want to encrypt or decrypt a file. Press 1 to Encrypt or 2 to Decrypt: ";
//	cin >> choice;
//	cout << "Enter the string: ";
//	cin >> input;
//	if (choice == 1) {
//		for (int i = 0; i < input.length(); i++)
//		{
//			newStr += char(int(input[i]) + steps);
//		}
//		cout << "Here is your Encrypted String: " << newStr;
//	}
//	else if (choice == 2) {
//		for (int i = 0; i < input.length(); i++)
//		{
//			newStr += char(int(input[i]) - steps);
//		}
//		cout << "Here is your Decrypted String: " << newStr;
//	}
//	else cout << "Invalid choice.";
//
//	return 0;
//}
//
//int l2Q5() {
//	int num, range;
//	cout << "Tell the Number: ";
//	cin >> num;
//	cout << "Input the limit of multiplication table: ";
//	cin >> range;
//	for (int i = 1; i <= range; i++)
//	{
//		cout << num << "x" << i << "=" << num * i << endl;
//	}
//	return 0;
//}
//int l2Q6() {
//	float num1, num2;
//	int operation;
//	cout << "Enter two Numbers: " << endl;
//	cin >> num1 >> num2;
//	cout << "Which operation you want to perform: " << endl;
//	cout << "Press 1 for addition" << endl << "Press 2 for subtraction" << endl
//		<< "Press 3 for multiplication" << endl << "Press 4 for division" << endl;
//	cin >> operation;
//	switch (operation)
//	{
//	case 1:
//		cout << num1 + num2;
//		break;
//	case 2:
//		cout << num1 - num2;
//		break;
//	case 3:
//		cout << num1 * num2;
//		break;
//	case 4:
//		cout << num1 / num2;
//		break;
//	default:
//		cout << "Invalid Choice";
//		break;
//	}
//	return 0;
//}
//int l2Q7() {
//	int num, ans;
//	cout << "Enter no of terms for fibonacci series: ";
//	cin >> num;
//	int first = 0, second = 1;
//
//	for (int i = 0; i < num; i++) {
//		if (i == 0) {
//			cout << first << " ";
//		}
//		else if (i == 1) {
//			cout << second << " ";
//
//		}
//		else {
//			ans = first + second;
//			first = second;
//			second = ans;
//			cout << ans << " ";
//
//		}
//	}
//
//	return 0;
//}
//int l2Q8() {
//	int input, attempts = 1;
//	int randnum = 1 + (rand() % 10);
//	cout << "Are you ready for an interesting Guessing game" << endl;
//	while (true) {
//		cout << "Guess any number between 1 to 10: ";
//		cin >> input;
//		if (input == randnum) break;
//		else {
//			cout << "Wrong Guess" << endl;
//			attempts++;
//		}
//	}
//	cout << "You Correctly guess it in " << attempts << " attempts";
//	return 0;
//}
//int l2Q9() {
//	char inp;
//	int compuser;
//	cout << "Be ready for rock paper and scissor game.";
//	cout << "Press 'r' for rock , 's' for scissor and 'p' for paper" << endl;
//	while (true)
//	{
//		compuser = 1 + (rand() % 3);
//		cout << "Your input: ";
//		cin >> inp;
//		if (inp == 'r') {
//			if (compuser == 1) { cout << "Computer chooses Rock" << endl;continue; }
//			else if (compuser == 2) { cout << "Computer choses paper. You lose!";break; }
//			else if (compuser == 3) { cout << "Computer choses scissor. You Won!";break; }
//		}
//		else if (inp == 'p') {
//			if (compuser == 1) { cout << "Computer chooses Rock. You won!";break; }
//			else if (compuser == 2) { cout << "Computer choses paper" << endl;continue; }
//			else if (compuser == 3) { cout << "Computer choses scissor. You lose!";break; }
//		}
//		else if (inp == 's') {
//			if (compuser == 1) { cout << "Computer chooses Rock.You lose!";break; }
//			else if (compuser == 2) { cout << "Computer choses paper. You Won!";break; }
//			else if (compuser == 3) { cout << "Computer choses scissor" << endl;continue; }
//		}
//		else { cout << "Invalid choice";continue; }
//	}
//	return 0;
//}
//
//int l2Q10() {
//	int num;
//	string days[7] = { "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" };
//	cout << "Enter day number to get its name: ";
//	cin >> num;
//	cout << days[num - 1];
//	return 0;
//}
//int l2Q11pt1() {
//	int i;
//	for (i = 1; i <= 9; i += 2)
//	{
//		for (int j = 1; j <= (9 - i) / 2; j++)
//		{
//			cout << " ";
//		}
//		for (int k = 1; k <= i; k++)
//		{
//			cout << "*";
//		}
//		cout << "\n";
//	}
//	for (i = 7; i >= 1; i -= 2)
//	{
//		for (int j = 1; j <= (9 - i) / 2; j++)
//		{
//			cout << " ";
//		}
//		for (int k = 1; k <= i; k++)
//		{
//			cout << "*";
//		}
//		cout << "\n";
//	}
//	return 0;
//}
//int l2Q11pt2() {
//	int i, j;
//	for (i = 1; i <= 5; i++)
//	{
//		for (j = 1;j <= 5;j++) {
//			if (!((i == 1) || (i == 5))) {
//				if (!((j == 1) || (j == 5))) {
//					cout << " ";
//					continue;
//				}
//			}
//			cout << "*";
//		}
//		cout << endl;
//	}
//
//	return 0;
//}
//int l2Q11pt3() {
//	int i, counter = 1, temp, temprun;
//	for (i = 1; i <= 9; i += 2)
//	{
//		temp = counter;
//		for (int j = 1; j <= (9 - i) / 2; j++)
//		{
//			cout << " ";
//		}
//		for (int k = 0; k < i; k++)
//		{
//			if (k < (i / 2)) { cout << temp;temp--; }
//			else {
//				cout << temp;
//				temp += 1;
//			}
//		}
//		cout << "\n";
//		counter++;
//	}
//
//	return 0;
//
//}
//
//int l2Q11pt4() {
//	int i;
//	for (i = 1; i <= 5; i += 1)
//	{
//		for (int j = 1; j <= i; j++)
//		{
//			cout << "*" << " ";
//		}
//		cout << "\n";
//	}
//	return 0;
//}
//int l2Q11pt5() {
//	int i, j, counter = 0;
//	for (i = 1; i <= 5; i++)
//	{
//		for (j = 1;j <= 10;j++) {
//			if (((j <=(counter+1)) || ((10-j)<=counter))) {
//				cout << "*";
//			}
//			else {
//				cout << " ";
//			}
//		}
//		cout << endl;
//		counter++;
//	}
//	for (i = 1; i <= 5; i++)
//	{
//		for (j = 1;j <= 10;j++) {
//			if (((j < (counter + 1)) || ((10 - j) < counter))) {
//				cout << "*";
//			}
//			else {
//				cout << " ";
//			}
//		}
//		cout << endl;
//		counter--;
//	}
//	return 0;
//}
//int main() {
//	intro();
//	l2Q11pt5();
//	return 0;
//}
