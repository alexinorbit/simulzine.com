hdr_32bitHDR = new Object();
hdr_32bitHDR.width = 600;
hdr_32bitHDR.height = 399;
hdr_32bitHDR.f8_stops = 2;
hdr_32bitHDR.f_step_res = 3;
hdr_32bitHDR.base_name = "32bitHDR";
hdr_32bitHDR.image_dir = "/static/blog/parthenon_giga/images/"; 
hdr_32bitHDR.basis = 4;
hdr_32bitHDR.shared_basis = 1;
hdr_32bitHDR.pix_per_fstop = 25;
hdr_32bitHDR.hist_start = -7.20975;
hdr_32bitHDR.hist_width = 600;
hdr_32bitHDR.exposure = 6;
hdr_32bitHDR.best_exp = 6;


            var cf = new Array(
   new Array( 1, 0.004941, 0, 0, 0),
   new Array( 1, 0.157191, 0, 0, 0),
   new Array( 1, 0.316501, 0, 0, 0),
   new Array( 1, 0.47785, 0, 0, 0),
   new Array( 1, 0.636794, 0, 0, 0),
   new Array( 1, 0.789464, 0, 0, 0),
   new Array( 1, 0.8917, 0.056136, 0, 0),
   new Array( 1, 0.954463, 0.164808, 0, 0),
   new Array( 0.995961, 1, 0.298554, 0, 0),
   new Array( 0.992357, 1, 0.460134, 0, 0),
   new Array( 0.992921, 1, 0.61944, 0, 0),
   new Array( 0.993587, 1, 0.772463, 0, 0),
   new Array( 0.994573, 1, 0.874541, 0.057581, 0),
   new Array( 1, 0.951017, 0.939871, 0.167569, 0),
   new Array( 1, 0.328929, 0.988487, 0.302869, 0),
   new Array( 0.844179, 0.878493, 1, 0.459841, 0),
   new Array( 0.804767, 0.851381, 1, 0.623223, 0),
   new Array( 0.793615, 0.861199, 1, 0.780415, 0),
   new Array( 0.750195, 0.82321, 1, 0.887745, 0.056321),
   new Array( 0.702168, 0.777604, 1, 0.951909, 0.17174),
   new Array( 0.563097, 0.61078, 0.754127, 1, 0.312939),
   new Array( 0.538779, 0.594761, 0.695918, 1, 0.483468),
   new Array( 0.413003, 0.469412, 0.56412, 1, 0.65287),
   new Array( 0.195722, 0.274036, 0.417979, 1, 0.816901),
   new Array( 0.095966, 0, 0, 0.911089, 0.966808)
);
            
            
            hdr_mousedrag = new Object();
            hdr_mousedrag.hdr_image = null;
            hdr_mousedrag.start_mouse_x = 0;
            hdr_mousedrag.start_win_x = 0;

            hdr_active_image = null;            
            document.onkeydown=hdr_onkeydown;
            