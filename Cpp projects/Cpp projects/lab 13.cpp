//#include <iostream>
//#include <string>
//#include <vector>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 13\n";
//    return 0;
//
//}
//
//class Matrix {
//private:
//    vector<vector<int>> data;
//    int rows;
//    int cols;
//public:
//    Matrix(int r, int c) : rows(r), cols(c) {
//        data.resize(rows, vector<int>(cols, 0));
//    }
//    void setValue(int r, int c, int value) {
//        if (r >= 0 && r < rows && c >= 0 && c < cols) {
//            data[r][c] = value;
//        }
//    }
//    int getRows() const {
//        return rows;
//    }
//    int getCols() const {
//        return cols;
//    }
//    Matrix operator*(const Matrix& other) const {
//        if (cols != other.getRows()) {
//            cout << "Matrix dimensions do not match for multiplication";
//        }
//        Matrix result(rows, other.getCols());
//        for (int i = 0; i < rows; ++i) {
//            for (int j = 0; j < other.getCols(); ++j) {
//                for (int k = 0; k < cols; ++k) {
//                    result.data[i][j] += data[i][k] * other.data[k][j];
//                }
//            }
//        }
//        return result;
//    }
//
//    void display() const {
//        for (const auto& row : data) {
//            for (int value : row) {
//                cout << value << " ";
//            }
//            cout << endl;
//        }
//    }
//};
//int l13Q1() {
//    Matrix mat1(2, 3);
//    Matrix mat2(3, 2);
//    mat1.setValue(0, 0, 1);
//    mat1.setValue(0, 1, 2);
//    mat1.setValue(0, 2, 3);
//    mat1.setValue(1, 0, 4);
//    mat1.setValue(1, 1, 5);
//    mat1.setValue(1, 2, 6);
//    mat2.setValue(0, 0, 7);
//    mat2.setValue(0, 1, 8);
//    mat2.setValue(1, 0, 9);
//    mat2.setValue(1, 1, 10);
//    mat2.setValue(2, 0, 11);
//    mat2.setValue(2, 1, 12);
//    cout << "Matrix 1:" << endl;
//    mat1.display();
//    cout << "Matrix 2:" << endl;
//    mat2.display();
//    Matrix result = mat1 * mat2;
//    cout << "Result of Matrix 1 * Matrix 2:" << endl;
//    result.display();
//    return 0;
//}
//
//
//
//
//int main() {
//    intro();
//    l13Q1();
//    return 0;
//}