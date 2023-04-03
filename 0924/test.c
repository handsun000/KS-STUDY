#Include <sys/types.h>
#Include <sys/stat.h>
#Include <unistd.h>
#Include <stdio.h>

int main(void)
{
	struct stat buf;
	stat("test1.txt", &buf);
	printf("st_mode = %d\n", buf.st_mode);
}

