//#include <iostream>
//#include <cstring>
//using namespace std;
//class Book {
//
//private:
//    static const int max_patrons = 10;
//    char publication_id[20];
//    char title[100];
//    char author[100];
//    char patrons[max_patrons][100];
//    int patrons_count;
//public:
//    Book() {
//        publication_id[0] = '\0';
//        title[0] = '\0';
//        author[0] = '\0';
//        patrons_count = 0;
//    }
//
//    Book(char* pid,  char* t,  char* a) {
//        strncpy_s(publication_id, pid, sizeof(publication_id) - 1);
//        publication_id[sizeof(publication_id) - 1] = '\0';
//
//        strncpy_s(title, t, sizeof(title) - 1);
//        title[sizeof(title) - 1] = '\0';
//
//        strncpy_s(author, a, sizeof(author) - 1);
//        author[sizeof(author) - 1] = '\0';
//
//        patrons_count = 0;
//    }
//
//    void display() {
//        cout << "Publication ID: " << publication_id << endl;
//        cout << "Title: " << title << endl;
//        cout << "Author: " << author << endl;
//        cout << "Patron Subscribers: ";
//        if (patrons_count == 0) {
//            cout << "None";
//        }
//        else {
//            for (int i = 0; i < patrons_count; i++) {
//                cout << patrons[i]<<" ";
//            }
//        }
//        cout << endl;
//    }
//
//    void editDetails(char* new_title, char* new_author) {
//        strncpy_s(title, new_title, sizeof(title) - 1);
//        title[sizeof(title) - 1] = '\0';
//
//        strncpy_s(author, new_author, sizeof(author) - 1);
//        author[sizeof(author) - 1] = '\0';
//    }
//
//    void addPatron(char* patron_name) {
//        if (patrons_count < max_patrons) {
//            strncpy_s(patrons[patrons_count], patron_name, sizeof(patrons[patrons_count]) - 1);
//            patrons[patrons_count][sizeof(patrons[patrons_count]) - 1] = '\0';
//            patrons_count++;
//        }
//        else {
//            cout << "Patron list is full for this book." << endl;
//        }
//    }
//
//    char* getPublicationId()  {
//        return publication_id;
//    }
//    void resetPatrons() {
//        patrons_count = 0;
//    }
//
//};
//
//bool isPublicationIdUnique(char* pid, Book books[], int size) {
//    for (int i = 0; i < size; i++) {
//        if (strcmp(books[i].getPublicationId(), pid) == 0) {
//            return false;
//        }
//    }
//    return true;
//}
//
//int findBookIndexByPublicationId(char* pid, Book books[], int size) {
//    for (int i = 0; i < size; ++i) {
//        if (strcmp(books[i].getPublicationId(), pid) == 0) {
//            return i;
//        }
//    }
//    return -1;
//}
//
//void addNewBook(Book books[], int& book_count, const int max_books) {
//    if (book_count >= max_books) {
//        cout << "Library is full. Cannot add more books." << endl;
//        return;
//    }
//
//    char pid[20], title[100], author[100];
//
//    cout << "Enter Publication ID: ";
//    cin.ignore();
//    cin.getline(pid, 20);
//
//    if (!isPublicationIdUnique(pid, books, book_count)) {
//        cout << "Publication ID already exists. Cannot add duplicate book." << endl;
//        return;
//    }
//
//    cout << "Enter Book Title: ";
//    cin.getline(title, 100);
//
//    cout << "Enter Author: ";
//    cin.getline(author, 100);
//
//    books[book_count] = Book(pid, title, author);
//
//    char patron_name[100];
//    cout << "Enter Patron Name (Enter 'done' to finish adding patrons): ";
//    cin.getline(patron_name, 100);
//    while (strcmp(patron_name, "done") != 0) {
//        books[book_count].addPatron(patron_name);
//        cout << "Enter Patron Name (Enter 'done' to finish adding patrons): ";
//        cin.getline(patron_name, 100);
//    }
//
//    book_count++;
//
//    cout << "Book added successfully." << endl;
//}
//
//void editBookDetails(Book books[], int book_count) {
//    char pid[20];
//    cout << "Enter Publication ID of the book to edit: ";
//    cin.ignore();
//    cin.getline(pid, 20);
//
//    int index = findBookIndexByPublicationId(pid, books, book_count);
//    if (index == -1) {
//        cout << "Book with Publication ID " << pid << " not found." << endl;
//    }
//    else {
//        char new_title[100], new_author[100];
//        cout << "Enter new Book Title: ";
//        cin.getline(new_title, 100);
//        cout << "Enter new Author: ";
//        cin.getline(new_author, 100);
//
//        books[index].editDetails(new_title, new_author);
//
//        cout << "Do you want to edit the list of patrons? (y/n): ";
//        char choice;
//        char schoice;
//        cin >> choice;
//        if (choice == 'y' || choice == 'Y') {
//            cout << "Do you want to clear the list of patrons? (y/n): ";
//            cin >> schoice;
//            if (schoice == 'y' || schoice == 'Y') books[index].resetPatrons(); // Reset patrons list
//            char patron_name[100];
//            cout << "Enter Patron Name (Enter 'done' to finish adding patrons): ";
//            cin.ignore();
//            cin.getline(patron_name, 100);
//            while (strcmp(patron_name, "done") != 0) {
//                books[index].addPatron(patron_name);
//                cout << "Enter Patron Name (Enter 'done' to finish adding patrons): ";
//                cin.getline(patron_name, 100);
//            }
//        }
//        cout << "Book details updated successfully." << endl;
//    }
//}
//
//
//void deleteBook(Book books[], int& book_count) {
//    char pid[20];
//    cout << "Enter Publication ID of the book to delete: ";
//    cin.ignore();
//    cin.getline(pid, 20);
//
//    int index = findBookIndexByPublicationId(pid, books, book_count);
//    if (index == -1) {
//        cout << "Book with Publication ID " << pid << " not found." << endl;
//        return;
//    }
//
//    for (int i = index; i < book_count - 1; i++) {
//        books[i] = books[i + 1];
//    }
//    book_count--;
//    cout << "Book deleted successfully." << endl;
//}
//
//void displayAllBooks(Book books[], int book_count) {
//    if (book_count == 0) {
//        cout << "No books in the library." << endl;
//        return;
//    }
//
//    for (int i = 0; i < book_count; i++) {
//        books[i].display();
//        cout << "----------------------" << endl;
//    }
//}
//
//int main() {
//    const int max_books = 100;
//    Book books[max_books];
//    int book_count = 0;
//    
//    while (true) {
//        cout << "E-Library Management System" << endl;
//        cout << "1. Add A New Book" << endl;
//        cout << "2. Edit Details of an Available Book" << endl;
//        cout << "3. Delete A Book" << endl;
//        cout << "4. Display All Books in the Library" << endl;
//        cout << "5. Exit" << endl;
//        cout << "Enter your choice: ";
//        int choice;
//        cin >> choice;
//
//        switch (choice) {
//        case 1:
//            addNewBook(books, book_count, max_books);
//            break;
//        case 2:
//            editBookDetails(books, book_count);
//            break;
//        case 3:
//            deleteBook(books, book_count);
//            break;
//        case 4:
//            displayAllBooks(books, book_count);
//            break;
//        case 5:
//            cout << "Exiting the system. Goodbye!" << endl;
//            return 0;
//        default:
//            cout << "Invalid choice. Please try again." << endl;
//        }
//    }
//}
