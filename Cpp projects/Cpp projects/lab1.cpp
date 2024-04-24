

//#include <iostream>
//#include <string>
//#include <cmath>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 1\n";
//    return 0;
//}
//
//int l1Q1() {
//    int l, w;
//    cout << "Enter Length of Rectangle: ";
//    cin >> l;
//    cout << "Enter width of Rectangle: ";
//    cin >> w;
//    cout << "Area of Rectangle: " << l * w;
//    return 0;
//
//}
//
//int l1Q2() {
//    int num;
//    cout << "Enter a number to check whether it is odd or even: ";
//    cin>> num;
//    if ((num % 2) == 0){
//        cout << num << " is even";
//    }
//    else {
//        cout << num << " is odd";
//
//    }
//
//    return 0;
//}
//int l1Q3(){
//    int num,ans;
//    cout << "Enter no of terms for fibonacci series: ";
//    cin >> num;
//    int first = 0, second = 1;
//
// for (int i = 0; i < num; i++){
//    if (i == 0) {
//        cout << first<<" ";
//    }
//    else if (i == 1) {
//        cout << second<<" ";
//
//    }
//    else {
//            ans = first + second;
//            first = second;
//            second = ans;
//            cout << ans << " ";
//
//    }
//  }
//   
//    return 0;
//}
//
//int l1Q4() {
//    int num1, num2, num3,max;
//    cout << "Enter three numbers and find out maximum number\n";
//    cout << "Enter Number 1: ";
//    cin >> num1;
//    cout << "Enter Number 2: ";
//    cin >> num2;
//    cout << "Enter Number 3: ";
//    cin >> num3;
//    int arr[3] = { num1,num2,num3 };
//    max = arr[0];
//    for (int i : arr)
//    {
//        if (max < i) {
//            max = i;
//        }
//
//    }
//    cout << "Maximum Number: " << max;
//
//    return 0;
//}
//
//int l1Q5() {
//    string inp,ans="";
//    cout << "Enter a String to get its reverse version: ";
//    cin >> inp;
//    for (int i = inp.length()-1; i >=0 ; i--)
//    {
//        ans += inp.at(i);
//    }
//    cout << "Reversed Sring: " << ans;
//    return 0;
//}
//
//int l1Q6() {
//    int num,status=0;
//    cout << "Enter a Number to check whether it is prime or not: ";
//    cin >> num;
//    if (num == 0 || num == 1) {
//        cout << num << " is neither prime nor composite.";
//    }
//    else {
//        for (int i = 2; i < (num/2); i++)
//        {
//            if ((num%i)==0){
//                status = 1;
//                break;
//            }
//        }
//    if (status==1) {
//        cout << num << " is not a prime.";
//
//    }
//    else {
//        cout << "It is Prime Number.";
//
//    }
//        
//    }
//    return 0;
//}
//
//int l1Q7() {
//    int inp,fact=1;
//    cout << "Enter a number to get its factorial: ";
//    cin >> inp;
//    for (int i = 1; i <= inp; i++)
//    {
//        fact = fact * i;
//    }
//    cout << "Factorial of " << inp << " is " << fact;
//    return 0;
//}
//
//int l1Q8() {
//    int PA, IR, T;
//    cout << "This is a program to calculate Simple Interest\n";
//    cout << "Enter Principal amount: ";
//    cin >> PA;
//    cout << "Enter Interest rate per annum: ";
//    cin >> IR;
//    cout << "Enter Time period : ";
//    cin >> T;
//    cout << "Simple Interest based on given information is " << float((PA * IR * T) / 100);
//    return 0;
//}
//
//int l1Q9() {
//    int inp,status=0;
//    cout << "Enter Year to check whether it is leap year or not: ";
//    cin >> inp;
//    if ((inp % 4) == 0) {
//        status = 1;
//        if ((inp % 100) == 0) {
//            status = 0;
//            if ((inp % 400) == 0) {
//                status = 1;
//            }
//        }
//    }
//    else {
//        status = 0;
//
//    }
//    if (status == 1) {
//        cout << inp << " is leap year.";
//    }
//    else {
//        cout << inp << " is not leap year.";
//    }
//    return 0;
//}
//
//int l1Q10(){
//    int inp;
//    cout << "Enter a number to check whether it is Armstrong number or not: ";
//    cin >> inp;
//    string num = to_string(inp);
//    int len = num.length();
//    int sum = 0;
//    for (int i = 0; i < len; i++)
//    {
//        int temp = stoi(string(1,num.at(i)));
//        sum += pow(temp, len);
//    }
//    if (sum == inp) {
//        cout << inp << " is a Armstrong Number.";
//    }
//    else {
//        cout << inp << " is not a Armstrong Number.";
//
//    }
//    return 0;
//}
//
//int l1Q11() {
//    float num1, num2;
//    cout << "Enter two Numbers to calculate their sum and average.\n";
//    cout << "Enter Number 1: ";
//    cin >> num1;
//    cout << "Enter Number 2: ";
//    cin >> num2;
//    cout << "Sum: " << num1 + num2<<endl;
//    cout << "Average:  " << (num1 + num2)/2;
//
//    return 0;
//}
//int l1Q12() {
//    int inp, hour, min, sec,rem;
//    cout << "Enter time in seconds: ";
//    cin >> inp;
//    hour = inp / 3600;
//    rem = inp % 3600;
//    min = rem / 60;
//    rem = inp % 60;
//    sec = rem;
//    cout << "Hours in time: " << hour;
//    cout << "\nMinutes in time: " << min;
//    cout << "\nSeconds in time: " << sec;
//    return 0;
//}
//
//int l1Q13() {
//    int inp,calc,rem;
//    cout << "Enter Amount in rs: ";
//    cin >> inp;
//    int denomination[8] = { 1000,500,100,50,10,5,2,1 };
//    for (int i = 0; i < 8; i++)
//    {
//        calc = inp / denomination[i];
//        inp = inp % denomination[i];
//        cout << denomination[i] << "'s in given amount: " << calc<<endl;
//    }
//    return 0;
//}
//
//int l1Q14() {
//    float fahr;
//    cout << "Enter Fahrenheit Temp: ";
//    cin >> fahr;
//    cout << "Celcius Temp: "<<float((fahr-32)*5/9);
//    return 0;
//}
//int l1Q15() {
//    int inp ;
//    cout << "Enter a 2-digit Integer value: ";
//    cin >> inp;
//    string rev = to_string(inp);
//    reverse(rev.begin(), rev.end());
//    int reverse = stoi(rev);
//    cout << "Reversed Number: " << reverse;
//    return 0;
//}
//int main()
//{
//    intro();
//    l1Q15();
//    return 0;
//
//}



