//#include <iostream>
//using namespace std;
//
//class ComboLock {
//	int secret1, secret2, secret3;
//	bool checks1=false,checks2=false, checks3=false ,resetkey= false;
//	int position = 0; 
//	public:
//		ComboLock(int s1, int s2, int s3) {
//			secret1 = s1;
//			secret2 = s2;
//			secret3 = s3;
//		}
//
//		void reset() {
//			position = 0;
//			resetkey = true;
//		}
//
//		void turnLeft(int ticks) {
//			position -= ticks;
//			while (position < 0) {
//				position += 40;
//			}
//			if (resetkey == false) {
//				if (checks1 == true) {
//					if (position == secret2) {
//						checks2 = true;
//					}
//				}
//			}
//			resetkey = false;
//		}
//		
//		void turnRight(int ticks) {
//			position += ticks;
//			while (position > 39) {
//				position -= 40;
//			}
//			if (resetkey == true) {
//				if (position == secret1)
//				{
//					checks1 = true;
//				}
//			}
//			else {
//				if (checks2 == true) {
//					if (position == secret3) {
//						checks3 = true;
//					}
//				}
//			}
//			resetkey = false;
//		}
//
//		bool open() {
//			if ((checks1==true)&&(checks2==true)&&(checks3==true))
//			{
//				return true;
//			}
//			else
//			{
//				return false;
//			}
//		}
//};
//
//int main() {
//	int i=0,s1=0, s2=0, s3=0,ticks=0,choice=0;
//	cout << "Here is Combination Locker for your Safety\n";
//	cout << "Enter three numbers between 0-39 to set your locker.";
//	cout << "Enter Three Numbers: \n";
//	cin >> s1 >> s2 >> s3;
//	if (((s1 >= 0) && (s1 <= 40)) && ((s2 >= 0) && (s2 <= 40)) && ((s3 >= 0) && (s3 <= 40))) {
//		ComboLock lock(s1, s2, s3);
//		lock.reset();
//		while (i < 3)
//		{
//			cout << "Do you want to turn left or Right. To turn right press 1 or to turn left 2: ";
//			cin >> choice;
//			if (choice == 1) {
//				cout << "How many ticks do you turn: ";
//				cin >> ticks;
//				lock.turnRight(ticks);
//			}
//			else if (choice == 2) {
//				cout << "How many ticks do you turn: ";
//				cin >> ticks;
//				lock.turnLeft(ticks);
//			}
//			else {
//				cout << "Invalid Choice\nChose either 1 or 2\n";
//				i -= 1;
//			}
//			i++;
//		}
//		bool status = lock.open();
//		if (status == 1) {
//			cout << "Your locker has been unlocked successfully.";
//		}
//		else {
//			cout << "Try again!";
//		}
//	}
//	else {
//		cout << "Could not setup locker";
//	}
//	
//
//	return 0;
//}
