
#include <iostream>

using namespace std;

int main()
{
    int x[7][6];
    for(int i = 0; i < 7; i++)
        for(int j = 0; j < 6; j++)
            cin>>x[i][j];
    cout<<endl<<endl;
    
    int start[2] = {5, 2};[]
    int finish1[2] = {1, 0};
    int finish2[2] = {1, 4};
    
    // for(int i = 0; i < 7; i++)
    //     for(int j = 0; j < 6; j++)
    //         if(x[start[i]-1][start[j]] == -1 || x[start[i]+1][start[j]] == -1 || x[start[i]][start[j]-1] == -1 || x[start[i]][start[j]+1] == -1)
    //             cout<<"Blocat"<<endl;
    //         else if    

    // matrix path finding algorithm
    int start[2] = {5, 2};
    int finish1[2] = {1, 0};
    int finish2[2] = {1, 4};

    for(int i = 0; i < 7; i++)
        for(int j = 0; j < 6; j++)
            if(x[start[i]-1][start[j]] == -1 || x[start[i]+1][start[j]] == -1 || x[start[i]][start[j]-1] == -1 || x[start[i]][start[j]+1] == -1)
                cout<<"Blocat"<<endl;
            



    

    for(int i = 0; i < 7; i++){
        for(int j = 0; j < 6; j++)
            cout<<x[i][j]<<' ';
        cout<<endl;    
    }
        
    return 0;
}