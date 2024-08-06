#include <iostream>
#include <vector>
#include <random>
using namespace std;

//class stack {
//	vector <int> list;
//public:
//	void push(int x) {
//		list.push_back(x);
//	}
//	int pop(){
//		int last = list[list.size() - 1];
//		list.pop_back();
//		return last;
//	}
//	int top() {
//		int last = list[list.size() - 1];
//		return last;
//	}
//	bool empty() {
//		if (list.size() == 0) {
//			return true;
//		}
//		else {
//			return false;
//		}
//	}
//
//};
//

int main() {
//	random_device ran;
//	uniform_int_distribution <int> range(1, 10);
//	for (int i = 0;i <= 5; i++) {
//		cout << range(ran) << endl;
//	}

	vector <int> list;
	list.push_back(5);
	cout << list[0];

return 0;
}