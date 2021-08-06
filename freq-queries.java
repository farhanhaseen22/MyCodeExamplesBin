    static List<Integer> freqQuery(List<int[]> queries) {

        HashMap<Integer,Integer> counter = new HashMap<Integer,Integer>();
        HashMap<Integer,Integer> frequency = new HashMap<Integer,Integer>();
        List<Integer> retList = new ArrayList<Integer>();

        for(int i=0;i<queries.size();i++)
        {
            int op = queries.get(i)[0];
            int num = queries.get(i)[1];
            if(op==1)
            {
                if(!counter.containsKey(num)){
                    counter.put(num,1);
                    if(!frequency.containsKey(1))
                        frequency.put(1,1);
                    else
                        frequency.put(1,frequency.get(1)+1);
                }
                else{
                    counter.put(num,counter.get(num)+1);
                    int temp = counter.get(num);
                    if(!frequency.containsKey(temp))
                        frequency.put(temp,1);
                    else
                        frequency.put(temp,frequency.get(temp)+1);
                }
            }
            else
            if(op==2)
            {
                if(counter.containsKey(num))
                {
                    if(counter.get(num)<=1){
                        counter.remove(num);
                        if(frequency.get(1)<=1)
                            frequency.remove(1);
                        else
                            frequency.put(1,frequency.get(1)-1);
                    }
                    else{
                        int temp = counter.get(num);
                        counter.put(num,counter.get(num)-1);
                        if(frequency.get(temp)<=1)
                            frequency.remove(temp);
                        else
                            frequency.put(temp,frequency.get(temp)-1);
                    }
                }

            }
            else
            if(op==3)
            {
                if(frequency.containsKey(num))
                {
                    if(frequency.get(num)>0)
                        retList.add(1);
                    else
                        retList.add(0);
                }
                else
                    retList.add(0);
            }
        }

        return retList;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in))) {
            int q = Integer.parseInt(bufferedReader.readLine().trim());
            List<int[]> queries = new ArrayList<>(q);
            Pattern p  = Pattern.compile("^(\\d+)\\s+(\\d+)\\s*$");
            for (int i = 0; i < q; i++) {
                int[] query = new int[2];
                Matcher m = p.matcher(bufferedReader.readLine());
                if (m.matches()) {
                query[0] = Integer.parseInt(m.group(1));
                query[1] = Integer.parseInt(m.group(2));
                queries.add(query);
                }
            }
            List<Integer> ans = freqQuery(queries);
            try (BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")))) {
                bufferedWriter.write(
                        ans.stream()
                                .map(Object::toString)
                                .collect(joining("\n"))
                                + "\n");
            }
        }
}


// Hashmap.containsValue is O(n) time complexity - more expensive than needed.
// I use both a counter Hashmap to know how many times a specific number appears
// and a frequency Hashmap to count how many numbers appeared for a specific amount of times.
// Then, for op==3 I just check if frequency is greater than zero.

// if q[0]==1:
//         cnt[freq[q[1]]]-=1
//         freq[q[1]]+=1
//         cnt[freq[q[1]]]+=1

//     elif q[0]==2:
//         if freq[q[1]]>0:
//             cnt[freq[q[1]]]-=1
//             freq[q[1]]-=1
//             cnt[freq[q[1]]]+=1