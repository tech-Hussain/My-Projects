//#include <iostream>
//#include <string>
//#include <vector>
//using namespace std;
//
//int intro() {
//    cout << "Name: Syed Muhammad Hussain (SE-23066)\n";
//
//    cout << "Lab 11\n";
//    return 0;
//
//}
//
//class Date {
//public:
//    int day;
//    int month;
//    int year;
//    Date(int d, int m, int y) : day(d), month(m), year(y) {}
//};
//class Book {
//private:
//    string title;
//    string author;
//    Date publicationDate;
//
//public:
//    Book(string t, string a, Date d) : title(t), author(a), publicationDate(d) {}
//
//    void displayDetails() const {
//        cout << "Title: " << title << endl;
//        cout << "Author: " << author << endl;
//        cout << "Publication Date: " << publicationDate.day << "/"
//            << publicationDate.month << "/" << publicationDate.year << endl;
//    }
//};
//int l11Q1() {
//    Date publicationDate(10, 5, 2020);
//    Book book("The Great Gatsby", "F. Scott Fitzgerald", publicationDate);
//    book.displayDetails();
//    return 0;
//}
//
//
//class Library {
//private:
//    vector<Book> books;
//
//public:
//    void addBook(const Book& book) {
//        books.push_back(book);
//    }
//
//    void displayAllBooks() const {
//        for (const auto& book : books) {
//            book.displayDetails();
//            cout << "-------------------" <<endl;
//        }
//    }
//};
//
//
//int l11Q2() {
//    Library library;
//    Date date1(10, 5, 2020);
//    Date date2(23, 8, 2015);
//    Book book1("The Great Gatsby", "F. Scott Fitzgerald", date1);
//    Book book2("To Kill a Mockingbird", "Harper Lee", date2);
//    library.addBook(book1);
//    library.addBook(book2);
//    library.displayAllBooks();
//    return 0;
//}
//
//class Song {
//private:
//    string title;
//    string artist;
//    int duration; 
//public:
//    Song(const string& t, const string& a, int d)
//        : title(t), artist(a), duration(d) {}
//    void displayDetails() const {
//        cout << "Title: " << title << endl;
//        cout << "Artist: " << artist << endl;
//        cout << "Duration: " << duration / 60 << "m " << duration % 60 << "s" << endl;
//    }
//};
//class Playlist {
//private:
//    vector<Song> songs;
//public:
//    void addSong(const Song& song) {
//        songs.push_back(song);
//    }
//    void displayPlaylist() const {
//        for (const auto& song : songs) {
//            song.displayDetails();
//            cout << "-------------------" << endl;
//        } }};
//int l11Q3() {
//    Playlist playlist;
//    Song song1("Bohemian Rhapsody", "Queen", 354);
//    Song song2("Imagine", "John Lennon", 183);
//    playlist.addSong(song1);
//    playlist.addSong(song2);
//    playlist.displayPlaylist();
//    return 0;
//}
//
//
//int main() {
//    intro();
//    l11Q3();
//	return 0;
//}
