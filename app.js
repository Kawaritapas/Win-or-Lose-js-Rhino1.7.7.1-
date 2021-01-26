
importPackage(java.io);
importPackage(java.lang);
importPackage(java.util);


    var stdin = new BufferedReader( new InputStreamReader(System['in']) )
    var testCases = stdin.readLine();
    while(testCases!==0){
        testCases = testCases-1;
        let result = 0;
        var numberOfPlayer = stdin.readLine();
        let v = stdin.readLine().split(" ");
        let p = stdin.readLine().split(" ");
        let sortedVillian =  v.sort(function(a,b){
            return b-a;
        })
        let sortedPlayer = p.sort(function(a,b){
            return b-a;
        })
        let villian = Arrays.toString(sortedVillian);
        let player = Arrays.toString(sortedPlayer);
        let length = numberOfPlayer;
        let i = 0;
        while(i< length-1){
            if(player.charAt(i)<villian.charAt(i)){
                result = 1;
            }
            i=i+1
        }
         if(result!==0){
            System.out.println("LOSE")
        }else{
            System.out.println("WIN")
        }
    }

   
