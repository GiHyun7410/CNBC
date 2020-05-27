
function init() {
	// body...


	$(document).ready(function(){
		$("#keyword").keyup(function(){
			var k = $(this).val();
			$("#user-table1 > tbody > tr").hide();
			var temp = $("#user-table1 > tbody > tr > td:nth-child(5n+2):contains('" + k + "')");
			$(temp).parent().show();
		})
	})	



	function swClick(swId){
			
		var swNum = swId.replace('modal_opne_btn','');
			
		switch(swNum){
				
			case '':
				$("#modal_opne_btn").click(function(){
					$("#modal").fadeIn();
				});
				break;
			case '_01':
				$("#modal_opne_btn").click(function(){
					$("#modal_01").fadeIn();
				});
				break;
			case '_02':
				$("#modal_opne_btn").click(function(){
					$("#modal_02").fadeIn();
				});
				break;
			case '_03':
				$("#modal_opne_btn").click(function(){
					$("#modal_03").fadeIn();
				});
				break;
			case '_04':
				$("#modal_opne_btn").click(function(){
					$("#modal_04").fadeIn();
				});
				break;
			case '_05':
				$("#modal_opne_btn").click(function(){
					$("#modal_05").fadeIn();
				});
				break;
			case '_06':
				$("#modal_opne_btn").click(function(){
					$("#modal_06").fadeIn();
				});
				break;
		}
	}	


// 작용제 도달시간 
   	$("#modal_opne_btn_00").click(function(){
		$("#modal_00").fadeIn();
    });
 	$("#modal_close_btn_00").click(function(){
        $("#modal_00").fadeOut();
    }); 

	$("#modal_opne_btn_a00").click(function(){
        $("#modala00").fadeIn();
    });
   
 	$("#modal_close_btn_a00").click(function(){
        $("#modala00").fadeOut();
    }); 
	

	$("#modal_opne_btn_b00").click(function(){
        $("#modalb00").fadeIn();
    });
   	$("#modal_close_btn_b00").click(function(){
        $("#modalb00").fadeOut();
    });


// ----------------------------------

   	$("#modal_opne_btn_01").click(function(){
		$("#modal_01").fadeIn();
    });
 	$("#modal_close_btn_01").click(function(){
        $("#modal_01").fadeOut();
    });

	$("#modal_opne_btn_a01").click(function(){
        $("#modala01").fadeIn();
    });
   
 	$("#modal_close_btn_a01").click(function(){
        $("#modala01").fadeOut();
    }); 
	

	$("#modal_opne_btn_b01").click(function(){
        $("#modalb01").fadeIn();
    });
   	$("#modal_close_btn_b01").click(function(){
        $("#modalb01").fadeOut();
    }); 
	
// --------------------------	


   	$("#modal_opne_btn_02").click(function(){
		$("#modal_02").fadeIn();
    });
 	$("#modal_close_btn_02").click(function(){
        $("#modal_02").fadeOut();
    }); 
	
	

	
   	$("#modal_opne_btn_03").click(function(){
		$("#modal_03").fadeIn();
    });
 	$("#modal_close_btn_03").click(function(){
        $("#modal_03").fadeOut();
    }); 
	
	

   	$("#modal_opne_btn_04").click(function(){
		$("#modal_04").fadeIn();
    });
 	$("#modal_close_btn_04").click(function(){
        $("#modal_04").fadeOut();
    }); 
	

	$("#modal_opne_btn_05").click(function(){
		$("#modal_05").fadeIn();
    });	
 	$("#modal_close_btn_05").click(function(){
        $("#modal_05").fadeOut();
    }); 

   

	$("#modal_opne_btn_06").click(function(){
		$("#modal_06").fadeIn();
    });   

 	$("#modal_close_btn_06").click(function(){
        $("#modal_06").fadeOut();
    }); 
	

	


	$("#modal_opne_btn_07").click(function(){
		$("#modal_07").fadeIn();
    });
   
 	$("#modal_close_btn_07").click(function(){
        $("#modal_07").fadeOut();
    }); 
	

	
	$("#modal_opne_btn_08").click(function(){
		$("#modal_08").fadeIn();
    });
   
 	$("#modal_close_btn_08").click(function(){
        $("#modal_08").fadeOut();
    }); 
	

	
		
	$("#modal_opne_btn_09").click(function(){
		$("#modal_09").fadeIn();
    });
   
 	$("#modal_close_btn_09").click(function(){
        $("#modal_09").fadeOut();
    }); 


	
//---------------------------------------------------------------
	
	$("#modal_opne_btn_10").click(function(){
		$("#modal_10").fadeIn();
    });
   
 	$("#modal_close_btn_10").click(function(){
        $("#modal_10").fadeOut();
    }); 
	

	
//	--------------------------------------------------------
	
	
		
	$("#modal_opne_btn_11").click(function(){
		$("#modal_11").fadeIn();
    });
   
 	$("#modal_close_btn_11").click(function(){
        $("#modal_11").fadeOut();
    }); 
		

		
//	--------------------------------------------------------
		
	
		
	$("#modal_opne_btn_12").click(function(){
		$("#modal_12").fadeIn();
    });
   
 	$("#modal_close_btn_12").click(function(){
        $("#modal_12").fadeOut();
    }); 

//	--------------------------------------------------------		
		
	
		
	$("#modal_opne_btn_13").click(function(){
		$("#modal_13").fadeIn();
    });
   
 	$("#modal_close_btn_13").click(function(){
        $("#modal_13").fadeOut();
    }); 
		
	
//	--------------------------------------------------------			
		
	
		
	$("#modal_opne_btn_14").click(function(){
		$("#modal_14").fadeIn();
    });
   
 	$("#modal_close_btn_14").click(function(){
        $("#modal_14").fadeOut();
    }); 
	
		

		
	//	--------------------------------------------------------		
		
		
		
	$("#modal_opne_btn_15").click(function(){
		$("#modal_15").fadeIn();
    });
   
 	$("#modal_close_btn_15").click(function(){
        $("#modal_15").fadeOut();
    }); 
		
	//	--------------------------------------------------------	
	
		
	$("#modal_opne_btn_16").click(function(){
		$("#modal_16").fadeIn();
    });
   
 	$("#modal_close_btn_16").click(function(){
        $("#modal_16").fadeOut();
    }); 
	
	//	--------------------------------------------------------	
		
	$("#modal_opne_btn_17").click(function(){
		$("#modal_17").fadeIn();
    });
   
 	$("#modal_close_btn_17").click(function(){
        $("#modal_17").fadeOut();
    }); 
		
	//	--------------------------------------------------------	
	
		
	$("#modal_opne_btn_18").click(function(){
		$("#modal_18").fadeIn();
    });
   
 	$("#modal_close_btn_18").click(function(){
        $("#modal_18").fadeOut();
    }); 
		
	//	--------------------------------------------------------	
	
	$("#modal_opne_btn_19").click(function(){
		$("#modal_19").fadeIn();
    });
   
 	$("#modal_close_btn_19").click(function(){
        $("#modal_19").fadeOut();
  	});
		
		
	//	--------------------------------------------------------	
	
	$("#modal_opne_btn_20").click(function(){
		$("#modal_20").fadeIn();
    });
   
 	$("#modal_close_btn_20").click(function(){
        $("#modal_20").fadeOut();
  	});

	//	--------------------------------------------------------	
	
	$("#modal_opne_btn_21").click(function(){
		$("#modal_21").fadeIn();
    });
   
 	$("#modal_close_btn_21").click(function(){
        $("#modal_21").fadeOut();
  	});
		
	//	--------------------------------------------------------	
	
	
	$("#modal_opne_btn_22").click(function(){
		$("#modal_22").fadeIn();
    });
   
 	$("#modal_close_btn_22").click(function(){
        $("#modal_22").fadeOut();
  	});
	
	
	$("#modal_opne_btn_23").click(function(){
		$("#modal_23").fadeIn();
    });
   
 	$("#modal_close_btn_23").click(function(){
        $("#modal_23").fadeOut();
  	});
	
	
	
	$("#modal_opne_btn_24").click(function(){
		$("#modal_24").fadeIn();
    });
   
 	$("#modal_close_btn_24").click(function(){
        $("#modal_24").fadeOut();
  	});
	
	
	$("#modal_opne_btn_25").click(function(){
		$("#modal_25").fadeIn();
    });
   
 	$("#modal_close_btn_25").click(function(){
        $("#modal_25").fadeOut();
  	});
	
	
	$("#modal_opne_btn_26").click(function(){
		$("#modal_26").fadeIn();
    });
   
 	$("#modal_close_btn_26").click(function(){
        $("#modal_26").fadeOut();
  	});
	
	
	$("#modal_opne_btn_27").click(function(){
		$("#modal_27").fadeIn();
    });
   
 	$("#modal_close_btn_27").click(function(){
        $("#modal_27").fadeOut();
  	});
	
	
	$("#modal_opne_btn_28").click(function(){
		$("#modal_28").fadeIn();
    });
   
 	$("#modal_close_btn_28").click(function(){
        $("#modal_28").fadeOut();
  	});
	
	
	$("#modal_opne_btn_29").click(function(){
		$("#modal_29").fadeIn();
    });
   
 	$("#modal_close_btn_29").click(function(){
        $("#modal_29").fadeOut();
  	});
	
	
	$("#modal_opne_btn_30").click(function(){
		$("#modal_30").fadeIn();
    });
   
 	$("#modal_close_btn_30").click(function(){
        $("#modal_30").fadeOut();
  	});
	
	
	$("#modal_opne_btn_31").click(function(){
		$("#modal_31").fadeIn();
    });
   
 	$("#modal_close_btn_31").click(function(){
        $("#modal_31").fadeOut();
  	});
	
	
	$("#modal_opne_btn_32").click(function(){
		$("#modal_32").fadeIn();
    });
   
 	$("#modal_close_btn_32").click(function(){
        $("#modal_32").fadeOut();
  	});
	
	
	$("#modal_opne_btn_33").click(function(){
		$("#modal_33").fadeIn();
    });
   
 	$("#modal_close_btn_33").click(function(){
        $("#modal_33").fadeOut();
  	});
	
	
	$("#modal_opne_btn_34").click(function(){
		$("#modal_34").fadeIn();
    });
   
 	$("#modal_close_btn_34").click(function(){
        $("#modal_34").fadeOut();
  	});
	
	
	$("#modal_opne_btn_35").click(function(){
		$("#modal_35").fadeIn();
    });
   
 	$("#modal_close_btn_35").click(function(){
        $("#modal_35").fadeOut();
	});
	
	
	$("#modal_opne_btn_36").click(function(){
		$("#modal_36").fadeIn();
    });
   
 	$("#modal_close_btn_36").click(function(){
        $("#modal_36").fadeOut();
  	});
	
	
	$("#modal_opne_btn_37").click(function(){
		$("#modal_37").fadeIn();
    });
   
 	$("#modal_close_btn_37").click(function(){
        $("#modal_37").fadeOut();
  	});
	
	
	$("#modal_opne_btn_38").click(function(){
		$("#modal_38").fadeIn();
    });
   
 	$("#modal_close_btn_38").click(function(){
        $("#modal_38").fadeOut();
  	});
	
	
	$("#modal_opne_btn_39").click(function(){
		$("#modal_39").fadeIn();
    });
   
 	$("#modal_close_btn_39").click(function(){
        $("#modal_39").fadeOut();
  	});
	
	
	$("#modal_opne_btn_40").click(function(){
		$("#modal_40").fadeIn();
    });
   
 	$("#modal_close_btn_40").click(function(){
        $("#modal_40").fadeOut();
  	});
	
	
	$("#modal_opne_btn_41").click(function(){
		$("#modal_41").fadeIn();
    });
   
 	$("#modal_close_btn_41").click(function(){
        $("#modal_41").fadeOut();
  	});
	
	
	$("#modal_opne_btn_42").click(function(){
		$("#modal_42").fadeIn();
    });
   
 	$("#modal_close_btn_42").click(function(){
        $("#modal_42").fadeOut();
  	});
	
	
	$("#modal_opne_btn_43").click(function(){
		$("#modal_43").fadeIn();
    });
   
 	$("#modal_close_btn_43").click(function(){
        $("#modal_43").fadeOut();
  	});
	
	
	$("#modal_opne_btn_44").click(function(){
		$("#modal_44").fadeIn();
    });
   
 	$("#modal_close_btn_44").click(function(){
        $("#modal_44").fadeOut();
  	});
	
	
	$("#modal_opne_btn_45").click(function(){
		$("#modal_45").fadeIn();
    });
   
 	$("#modal_close_btn_45").click(function(){
        $("#modal_45").fadeOut();
  	});
	
	
	$("#modal_opne_btn_46").click(function(){
		$("#modal_46").fadeIn();
    });
   
 	$("#modal_close_btn_46").click(function(){
        $("#modal_46").fadeOut();
  	});
	
	
	$("#modal_opne_btn_47").click(function(){
		$("#modal_47").fadeIn();
    });
   
 	$("#modal_close_btn_47").click(function(){
        $("#modal_47").fadeOut();
  	});
	
	
	$("#modal_opne_btn_48").click(function(){
		$("#modal_48").fadeIn();
    });
   
 	$("#modal_close_btn_48").click(function(){
        $("#modal_48").fadeOut();
  	});
	
	
	$("#modal_opne_btn_49").click(function(){
		$("#modal_49").fadeIn();
    });
   
 	$("#modal_close_btn_49").click(function(){
        $("#modal_49").fadeOut();
  	});

  }
  window.onload = init;