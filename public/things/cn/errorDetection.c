#include <stdio.h>
#include <string.h>
#define N strlen(g)
char t[28], cs[28], g[] = "10001000000100001";
inta, e, c;
voidxor()
{
    for (c = 1; c < N; c++)
        cs[c] = ((cs[c] == g[c]) ? '0' : '1');
}
voidcrc()
{
    for (e = 0; e < N; e++)
        cs[e] = t[e];
    do
    {
        if (cs[0] == '1')
            xor();
        for (c = 0; c < N - 1; c++)
            cs[c] = cs[c + 1];
        cs[c] = t[e++];
    } while (e <= a + N - 1);
}
int main()
{
    printf("\nEnter data : ");
    scanf("%s", t);
    printf("\n----------------------------------------");
    printf("\nGeneratng polynomial : %s", g);
    a = strlen(t);
    for (e = a; e < a + N - 1; e++)
        t[e] = '0';
    printf("\n----------------------------------------");
    printf("\nModified data is : %s", t);
    printf("\n----------------------------------------");
    crc();
    printf("\n CRC checksum is : %s", cs);
    for (e = a; e < a + N - 1; e++)
        t[e] = cs[e - a];
    printf("\n----------------------------------------");
    printf("\nFinalcodeword transmitted is : %s", t);
    printf("\n----------------------------------------");
    printf("\nTest error detection 0(yes) 1(no)? : ");
    scanf("%d", &e);
    if (e == 0)
    {
        do
        {
            printf("\nEnter the position where error is to be inserted : ");
            scanf("%d", &e);
        } while (e == 0 || e > a + N - 1);
        t[e - 1] = (t[e - 1] == '0') ? '1' : '0';
        printf("\n----------------------------------------");
        printf("\nErroneous data : %s\n", t);
    }
    crc();
    for (e = 0; (e < N - 1) && (cs[e] != '1'); e++)
        ;
    if (e < N - 1)
    {
        printf("\n CRC checksum is : %s", cs);
        printf("\nError detected\n\n");
    }
    else
    {
        printf("\n CRC checksum is : %s", cs);
        printf("\nNo error detected\n\n");
    }
    printf("\n----------------------------------------\n");
    return 0;
}

// Output 1:
// Enter data : 101
// ----------------------------------------
// Generatngpolynomial : 10001000000100001
// ----------------------------------------
// Modified data is : 1010000000000000000
// ----------------------------------------
// CRC checksum is : 0101000010100101
// ----------------------------------------
// Final codeword transmitted is : 1010101000010100101
// ----------------------------------------
// Test error detection 0(yes) 1(no)? : 0
// Enter the position where error is to be inserted : 3
// ---------------------------------------
// Erroneous data : 1000101000010100101
// CRC checksum is : 0001000000100001
// Error detected
// ----------------------------------------
// Output 2:
// Enter data : 101
// ----------------------------------------
// Generatngpolynomial : 10001000000100001
// ----------------------------------------
// Modified data is : 1010000000000000000
// ----------------------------------------
// CRC checksum is : 0101000010100101
// ----------------------------------------
// Final codeword transmitted is : 1010101000010100101
// ----------------------------------------
// Test error detection 0(yes) 1(no)? : 1
// CRC checksum is : 0000000000000000
// No error detected
// ----------------------------------------