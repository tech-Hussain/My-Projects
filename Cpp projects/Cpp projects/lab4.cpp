
//#include <iostream>
//#include <string>
//using namespace std;
//int intro() {
//	cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//	cout << "Lab 4\n\n";
//	return 0;
//}
//void swap(int* a, int* b) {
//	int temp = *a;
//	*a = *b;
//	*b = temp;
//}
//
//int l4Q1() {
//	int x = 3, y = 8;
//	int* m = &x;
//	int* n = &y;
//	cout << "The value at m before swap is: " << *m << " and The value at n before swap is: " << *n<<endl;
//	swap(m, n);
//	cout << "The value at m after swap is: " << *m << " and The value at n after swap is: " << *n;
//	
//	return 0;
//}
//void reverseArray(int arr[], int size) {
//	int* start = arr;
//	int* end = arr + size - 1;
//	while (start < end){
//		int temp = *start;
//		*start = *end;
//		*end = temp;
//		start++;
//		end--;
//	}
//}
//int l4Q2() {
//	int array[4] = { 45,5,63,21 };
//	cout << "Original Array" << endl;
//	for (int i = 0; i < 4; i++)
//	{
//		cout << array[i] << " ";
//	}
//	reverseArray(array, 4);
//	cout << "\nReversed Array" << endl;
//	for (int i = 0; i < 4; i++)
//	{	
//		cout << array[i] << " ";
//	}
//
//	return 0;
//}
//int* findmax(int arr[], int size) {
//	int* elem = arr;
//	int* maxpoint=elem;
//	for (int i = 0; i < size; i++)
//	{
//		if (*elem > *maxpoint) {
//			maxpoint = elem;
//		}
//		elem++;
//	}
//	return maxpoint;
//}
//
//int l4Q3() {
//	int array[4] = { 45,54,643,211 };
//	cout << "Array" << endl;
//	for (int i = 0; i < 4; i++)
//	{
//		cout << array[i] << " ";
//	}
//	int* max= findmax(array, 4);
//	cout << "\nThe max element is "<< *max;
//	return 0;
//}
//
//void removeDuplicates(int arr[], int* size) {
//	int* currentIdx = arr + 1;
//
//	for (int* i = arr + 1; i < arr + *size; ++i) {
//		bool isDuplicate = false;
//
//		for (int* j = arr; j < currentIdx; ++j) {
//			if (*i == *j) {
//				isDuplicate = true;
//				break;
//			}
//		}
//
//		if (!isDuplicate) {
//			*currentIdx = *i;
//			currentIdx++;
//		}
//	}
//
//	*size = currentIdx - arr;
//}
//int l4Q4() {
//	int arr[] = { 1, 2, 2, 3, 4, 4, 5 };
//	int size = 7;
//
//	cout << "Original array: ";
//	for (int i = 0; i < size; ++i) {
//		cout << arr[i] << " ";
//	}
//	cout <<endl;
//
//	removeDuplicates(arr,&size);
//
//	cout << "Array after removing duplicates: ";
//	for (int i = 0; i < size; ++i) {
//		cout << arr[i] << " ";
//	}
//
//	return 0;
//}
//
//bool isPalindrome(const char* str) {
//	int length = strlen(str);
//	const char* start = str;
//	const char* end = str + length - 1;
//	while (start < end) {
//		if (*start != *end) {
//			return false;
//		}
//		start++;
//		end--;
//	}
//	return true;
//}
//
//
//int l4Q5() {
//	const char* str1 = "level";
//	const char* str2 = "hello";
//
//	cout << "Is '" << str1 << "' a palindrome? " << isPalindrome(str1) << endl;
//	cout << "Is '" << str2 << "' a palindrome? " << isPalindrome(str2) << endl;
//	
//	return 0;
//}
//
//
//int main() {
//	intro();
//	l4Q3();
//	return 0;
//}