package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class EbService {

	public EbDto ebCalculater(int unit) {
	EbDto eb=new EbDto();
		if(unit >eb.getUnit1_FirstValue()&& unit<=eb.getUnit1_FifthValue())
		  // ( unit>0&&unit<=500)
		{
				if(unit>eb.getUnit1_FirstValue()&& unit<=eb.getUnit1_SecondValue())
					//(unit>0&&unit<=100)
					{
					eb.firstDifferent= unit-eb.getUnit1_FirstValue(); // diff= unit-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit1_Firstfee();  // price=dif*0;
					return eb;
					}
				
				if(unit>eb.getUnit1_SecondValue()&&unit<=eb.getUnit1_ThirdValue())
					//(unit>100&&unit<=200)
					{
					eb.firstDifferent= eb.getUnit1_SecondValue()-eb.getUnit1_FirstValue(); // dif= 100-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit1_Firstfee();   // price= 100*0
					eb.secondDifferent=unit-eb.getUnit1_SecondValue();  //  dif=unit-100;
					eb.secondPrice=eb.secondDifferent*eb.getUnit1_Secondfee(); // price=dif*2.25
					return eb;
				
					}
				
				if(unit>eb.getUnit1_ThirdValue()&&unit<=eb.getUnit1_FourthValue())
				//(unit>200&&unit<=400)
					{
					eb.firstDifferent= eb.getUnit1_SecondValue()-eb.getUnit1_FirstValue(); // dif= 100-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit1_Firstfee();   // price= 100*0
					eb.secondDifferent= eb.getUnit1_ThirdValue()-eb.getUnit1_SecondValue(); // dif= 200-100;
					eb.secondPrice=eb.secondDifferent*eb.getUnit1_Secondfee();   // price= 100*2.25
					eb.thirdDifferent=unit-eb.getUnit1_ThirdValue();  //  dif=unit-200;
					eb.thirdPrice=eb.thirdDifferent*eb.getUnit1_Thirdfee(); // price=dif*4.50
					return eb;
	
					}
	
				if(unit>eb.getUnit1_FourthValue()&&unit<=eb.getUnit1_FifthValue())
				//(unit>400&&unit<=500)
					{
					eb.firstDifferent= eb.getUnit1_SecondValue()-eb.getUnit1_FirstValue(); // dif= 100-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit1_Firstfee();   // price= 100*0
					eb.secondDifferent= eb.getUnit1_ThirdValue()-eb.getUnit1_SecondValue(); // dif= 200-100;
					eb.secondPrice=eb.secondDifferent*eb.getUnit1_Secondfee();   // price= 100*2.25
					eb.thirdDifferent= eb.getUnit1_FourthValue()-eb.getUnit1_ThirdValue(); // dif= 400-200;
					eb.thirdPrice=eb.thirdDifferent*eb.getUnit1_Thirdfee();   // price= 200*4.50
					eb.fourthDifferent=unit-eb.getUnit1_FourthValue();  //  dif=unit-400;
					eb.fourthPrice=eb.fourthDifferent*eb.getUnit1_Fourthfee(); // price=dif*6.00
					return eb;
					}
			}
		if(unit>eb.getUnit2_FourthValue())
			//(unit>500)
		{
			if(unit>eb.getUnit2_FourthValue()&&unit<=eb.getUnit2_FourthValue())
			//(unit>500&&unit<=600)
			{
				eb.firstDifferent=eb.getUnit2_SecondtValue()-eb.getUnit2_FirstValue(); // dif=100-0;
				eb.firstPrice=eb.firstDifferent*eb.getUnit2_firstfee();      // price=100*0;
				eb.secondDifferent=eb.getUnit2_ThirdValue()-eb.getUnit2_SecondtValue(); //dif=400-100;
				eb.secondPrice=eb.secondDifferent*eb.getUnit2_Secondfee();   //price=300*4.50;
				eb.thirdDifferent=eb.getUnit2_FourthValue()-eb.getUnit2_ThirdValue();   // dif=500-400;
				eb.thirdPrice=eb.thirdDifferent*eb.getUnit2_Thirdfee();     //price=100*6.00;
				eb.fourthDifferent=unit-eb.getUnit2_FourthValue();           //dif= unit-500;
				eb.fourthPrice=eb.fourthDifferent*eb.getUnit2_Fourthfee();     //price=dif*8.00;
			}
			
			if(unit>eb.getUnit2_FifthValue()&&unit<=eb.getUnit2_SixValue())
				//(unit>600&&unit<=800)
				{
					eb.firstDifferent=eb.getUnit2_SecondtValue()-eb.getUnit2_FirstValue(); // dif=100-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit2_firstfee();      // price=100*0;
					eb.secondDifferent=eb.getUnit2_ThirdValue()-eb.getUnit2_SecondtValue(); //dif=400-100;
					eb.secondPrice=eb.secondDifferent*eb.getUnit2_Secondfee();   //price=300*4.50;
					eb.thirdDifferent=eb.getUnit2_FourthValue()-eb.getUnit2_ThirdValue();   // dif=500-400;
					eb.thirdPrice=eb.thirdDifferent*eb.getUnit2_Thirdfee();     //price=100*6.00;
					eb.fourthDifferent=eb.getUnit2_FifthValue()-eb.getUnit2_FourthValue();   // dif=600-500;
					eb.fourthPrice=eb.fourthDifferent*eb.getUnit2_Fourthfee();     //price=100*8.00;
					eb.fifthDifferent=unit-eb.getUnit2_FifthValue();           //dif= unit-600;
					eb.fifthPrice=eb.fifthDifferent*eb.getUnit2_Fifthfee();     //price=dif*9.00;
				}
		
			
			if(unit>eb.getUnit2_SixValue()&&unit<=eb.getUnit2_SeventhValue())
				//(unit>800&&unit<=1000)
				{
					eb.firstDifferent=eb.getUnit2_SecondtValue()-eb.getUnit2_FirstValue(); // dif=100-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit2_firstfee();      // price=100*0;
					eb.secondDifferent=eb.getUnit2_ThirdValue()-eb.getUnit2_SecondtValue(); //dif=400-100;
					eb.secondPrice=eb.secondDifferent*eb.getUnit2_Secondfee();   //price=300*4.50;
					eb.thirdDifferent=eb.getUnit2_FourthValue()-eb.getUnit2_ThirdValue();   // dif=500-400;
					eb.thirdPrice=eb.thirdDifferent*eb.getUnit2_Thirdfee();     //price=100*6.00;
					eb.fourthDifferent=eb.getUnit2_FifthValue()-eb.getUnit2_FourthValue();   // dif=600-500;
					eb.fourthPrice=eb.fourthDifferent*eb.getUnit2_Fourthfee();     //price=100*8.00;
					eb.fifthDifferent=eb.getUnit2_SixValue()-eb.getUnit2_FifthValue();   // dif=800-600;
					eb.fifthPrice=eb.fifthDifferent*eb.getUnit2_Fifthfee();     //price=200*9.00;
					eb.sixthDifferent=unit-eb.getUnit2_SixValue();           //dif= unit-800;
					eb.sixthPrice=eb.sixthDifferent*eb.getUnit2_Sixthfee();     //price=dif*10.00;
				}

			if(unit>eb.getUnit2_SeventhValue())
				//(unit>1000)
				{
					eb.firstDifferent=eb.getUnit2_SecondtValue()-eb.getUnit2_FirstValue(); // dif=100-0;
					eb.firstPrice=eb.firstDifferent*eb.getUnit2_firstfee();      // price=100*0;
					eb.secondDifferent=eb.getUnit2_ThirdValue()-eb.getUnit2_SecondtValue(); //dif=400-100;
					eb.secondPrice=eb.secondDifferent*eb.getUnit2_Secondfee();   //price=300*4.50;
					eb.thirdDifferent=eb.getUnit2_FourthValue()-eb.getUnit2_ThirdValue();   // dif=500-400;
					eb.thirdPrice=eb.thirdDifferent*eb.getUnit2_Thirdfee();     //price=100*6.00;
					eb.fourthDifferent=eb.getUnit2_FifthValue()-eb.getUnit2_FourthValue();   // dif=600-500;
					eb.fourthPrice=eb.fourthDifferent*eb.getUnit2_Fourthfee();     //price=100*8.00;
					eb.fifthDifferent=eb.getUnit2_SixValue()-eb.getUnit2_FifthValue();   // dif=800-600;
					eb.fifthPrice=eb.fifthDifferent*eb.getUnit2_Fifthfee();     //price=200*9.00;
					eb.sixthDifferent=eb.getUnit2_SeventhValue()-eb.getUnit2_SixValue();   // dif=1000-800;
					eb.sixthPrice=eb.sixthDifferent*eb.getUnit2_Sixthfee();     //price=200*10.00;
					
					eb.seventhDifferent=unit-eb.getUnit2_SeventhValue();           //dif= unit-800;
					eb.seventhPrice=eb.seventhDifferent*eb.getUnit2_Seventhfee();     //price=dif*10.00;
				}
		}
		return eb;
		
	}

	
	
}
