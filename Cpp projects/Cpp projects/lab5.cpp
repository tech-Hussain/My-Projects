//#include <iostream>
//#include <string>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 5\n";
//    return 0;
//}
//
//int l5Q1() {
//    const int row = 3, column = 3;
//    int matrix[row][column] = { {1,2,3},{4,5,6},{7,8,9} };
//    int sum = 0;
//    cout << "This program is to calculate sum of all elements of a 2d matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            sum += matrix[i][j];
//        }
//    }
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            cout<<matrix[i][j]<<" ";
//        }
//        cout << endl;
//    }
//    cout << "\nThe Sum of all elements of above 2d matrix is " << sum;
//    return 0;
//}
//
//int l5Q2() {
//    const int row = 3, column = 3;
//    int originalmatrix[row][column] = { {1,2,3},{4,5,6},{7,8,9} };
//    int transposeMatrix[row][column];
//    cout << "This program is to calculate transpose of a matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            transposeMatrix[i][j] = originalmatrix[j][i];
//            
//        }
//    }
//    cout << "Original Matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            cout << originalmatrix[i][j] << " ";
//        }
//        cout << endl;
//    }
//    cout << "Transpose Matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            cout << transposeMatrix[i][j] << " ";
//        }
//        cout << endl;
//    }
//    return 0;
//}
//int l5Q3() {
//    const int row = 3, column = 3;
//    int originalmatrix[row][column] = { {1,2,3},{2,4,5},{3,5,6} };
//    int transposeMatrix[row][column];
//    int status = 0;
//    cout << "This program is to check whether a matrix is symmetric or not\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            transposeMatrix[i][j] = originalmatrix[j][i];
//
//        }
//    }
//    cout << "Original Matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            cout << originalmatrix[i][j] << " ";
//        }
//        cout << endl;
//    }
//    cout << "Transpose Matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            cout << transposeMatrix[i][j] << " ";
//        }
//        cout << endl;
//    }
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            if (originalmatrix[i][j]!=transposeMatrix[i][j])
//            {
//                status = -1;break;
//            }
//        }
//        if (status==-1)
//        {
//            break;
//        }
//    }
//    if (status==-1)
//    {
//        cout << "The Above Matrix is not symmetric";
//    }
//    else {
//        cout << "The Above Matrix is  symmetric";
//
//    }
//    return 0;
//}
//int l5Q4() {
//    const int row1 = 3, column1 = 3;
//    int matrix1[row1][column1] = { {1,2,3},{4,5,6},{7,8,9} };
//    const int row2 = 3, column2 = 3;
//    int matrix2[row2][column2] = { {11,2,3},{4,51,6},{7,2,9} };
//    int resultmatrix[row1][column2] = { {0,0,0},{0,0,0},{0,0,0} };
//    cout << "This program is to calculate two matrices\n";
//    if (column1 == row2) {
//        for (int i = 0; i < row1; ++i) {
//            for (int j = 0; j < column2; ++j) {
//                for (int k = 0; k < column1; ++k) {
//                    resultmatrix[i][j] += matrix1[i][k] * matrix2[k][j];
//                }
//            }
//        }
//    }
//    else {
//        cout << "Dimension Error";
//    }
//
//    cout << "Matrix1\n";
//    for (int i = 0;i < row1;i++) {
//        for (int j = 0; j < column1; j++)
//        {
//            cout << matrix1[i][j] << " ";
//        }
//        cout << endl;
//    }
//    cout << "Matrix2\n";
//    for (int i = 0;i < row2;i++) {
//        for (int j = 0; j < column2; j++)
//        {
//            cout << matrix2[i][j] << " ";
//        }
//        cout << endl;
//    }
//    cout << "Multiplication Matrix\n";
//    for (int i = 0;i < row1;i++) {
//        for (int j = 0; j < column2; j++)
//        {
//            cout << resultmatrix[i][j] << " ";
//        }
//        cout << endl;
//    }
//    return 0;
//}
//int l5Q5() {
//    const int row = 3, column = 3;
//    int matrix[row][column] = { {1,21,3},{41,5,6},{7,8,9} };
//    int maxInRow[row];
//    int max = 0;
//    cout << "This program is to calculate Maximum number in each row of Matrix\n";
//    for (int i = 0;i < row;i++) {
//        max = matrix[i][0];
//        for (int j = 0; j < column; j++)
//        {
//            if (matrix[i][j]>max)
//            {
//                max = matrix[i][j];
//            }
//        }
//        maxInRow[i] = max;
//    }
//    cout << "Matrix\n";
//    for (int i = 0;i < row;i++) {
//        for (int j = 0; j < column; j++)
//        {
//            cout << matrix[i][j] << " ";
//        }
//        cout << endl;
//    }
//    cout << "Max Elements in each row\n";
//    for (int i = 0;i < row;i++){
//        cout << "Max element of row " << i + 1 << " is " << maxInRow[i]<<endl;
//    }
//    return 0;
//}
//int main() {
//    intro();
//    l5Q5();
//    return 0;
//}