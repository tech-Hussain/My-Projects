#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <pthread.h>

typedef struct {
    double *a;
    double *b;
    double sum;
    int veclen;
} DOTDATA;

typedef struct {
    int start;
    int end;
} ThreadData;

#define VECLEN 50000000  // Large size to expose race condition
DOTDATA dotstr;

pthread_mutex_t mutexsum;
int NUM_THREADS = 4;

void *dotprod(void *arg) {
    ThreadData *data = (ThreadData *)arg;
    double *x = dotstr.a;
    double *y = dotstr.b;

    for (int i = data->start; i < data->end; i++) {

        double temp = x[i] * y[i];

        // Uncomment mutex lock to fix race condition
        //pthread_mutex_lock(&mutexsum);

        dotstr.sum += temp;

        //pthread_mutex_unlock(&mutexsum);
    }

    pthread_exit(NULL);
}

int main() {
    int len = VECLEN;
    double *a = (double *)malloc(len * sizeof(double));
    double *b = (double *)malloc(len * sizeof(double));

    for (int i = 0; i < len; i++) {
        a[i] = 1.0;
        b[i] = 1.0;
    }

    dotstr.veclen = len;
    dotstr.a = a;
    dotstr.b = b;
    dotstr.sum = 0.0;

    pthread_mutex_init(&mutexsum, NULL);

    pthread_t threads[NUM_THREADS];
    ThreadData thread_data[NUM_THREADS];

    clock_t start = clock();

    int chunk = len / NUM_THREADS;
    for (int i = 0; i < NUM_THREADS; i++) {
        thread_data[i].start = i * chunk;
        thread_data[i].end = (i == NUM_THREADS - 1) ? len : thread_data[i].start + chunk;

        pthread_create(&threads[i], NULL, dotprod, (void *)&thread_data[i]);
    }

    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    clock_t end = clock();
    double time_spent = (double)(end - start) / CLOCKS_PER_SEC;

    printf("Expected Sum = %f\n", (double)VECLEN);
    printf("Calculated Sum = %f\n", dotstr.sum);
    printf("Execution Time: %f seconds\n", time_spent);

    pthread_mutex_destroy(&mutexsum);
    free(a);
    free(b);

    return 0;
}
