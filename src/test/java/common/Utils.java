package common;

import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class Utils {


    public static String getProperty(String key) throws IOException {
        Properties prop = new Properties();

        String file = System.getProperty("user.dir")+"/src/test/resources/config/config.properties";
        FileInputStream fis = new FileInputStream(file);
        prop. load(fis);

        return prop.getProperty(key);
    }

    public static Map<String,String> getParams(String propHeader) throws IOException {
        String header= getProperty(propHeader);
        Map<String,String> headers = new HashMap<>();
        String array[]= header.split(",");

        for(int i=0;i<array.length;i++){
            String key,value;
            key=array[i].split(":")[0];
            value=array[i].split(":")[1];
            headers.put(key,value);
        }
        return headers;

    }
    public static void exportResponse(String api, String response) throws IOException {

        String file = System.getProperty("user.dir")+"/src/test/resources/output/"+api+".json";
        FileWriter fw= new FileWriter(file);
        fw.write(response.toString());
        fw.close();
    }

    public static String readResponse(String api, String response) throws IOException {

        String file = System.getProperty("user.dir")+"/src/test/resources/output/"+api+".json";
        BufferedReader br = new BufferedReader(new FileReader(file));

        String data;
        String storeData;
        while ((data = br.readLine()) != null) {
            System.out.println("Data from file  : " + data);
            return data;
        }
        return data;
    }


}

