Search.setIndex({docnames:["dev/MUSINGS","developer/guide/architecture","developer/guide/building","developer/guide/dependencies","developer/guide/index","developer/index","developer/rest/certificates","developer/rest/commands","developer/rest/devices","developer/rest/index","developer/rest/organization","guides/nginx","guides/scep","index","internal/api/index","internal/decorators","internal/flask/configuration","internal/flask/enroll","internal/flask/index","internal/flask/mdm_app","internal/index","internal/models/certificate","internal/models/certificate_request","internal/models/command","internal/models/device","internal/models/index","internal/models/installed_application","internal/models/installed_certificate","internal/models/installed_profile","internal/models/organization","internal/models/profile","internal/models/rsa_private_key","internal/push","internal/vpp/decorators","internal/vpp/enum","internal/vpp/errors","internal/vpp/index","internal/vpp/operations","internal/vpp/vpp","internal/workers/index","internal/workers/runner","user/guide/index","user/guide/preface","user/index","user/install"],envversion:51,filenames:["dev/MUSINGS.rst","developer/guide/architecture.rst","developer/guide/building.rst","developer/guide/dependencies.rst","developer/guide/index.rst","developer/index.rst","developer/rest/certificates.rst","developer/rest/commands.rst","developer/rest/devices.rst","developer/rest/index.rst","developer/rest/organization.rst","guides/nginx.rst","guides/scep.rst","index.rst","internal/api/index.rst","internal/decorators.rst","internal/flask/configuration.rst","internal/flask/enroll.rst","internal/flask/index.rst","internal/flask/mdm_app.rst","internal/index.rst","internal/models/certificate.rst","internal/models/certificate_request.rst","internal/models/command.rst","internal/models/device.rst","internal/models/index.rst","internal/models/installed_application.rst","internal/models/installed_certificate.rst","internal/models/installed_profile.rst","internal/models/organization.rst","internal/models/profile.rst","internal/models/rsa_private_key.rst","internal/push.rst","internal/vpp/decorators.rst","internal/vpp/enum.rst","internal/vpp/errors.rst","internal/vpp/index.rst","internal/vpp/operations.rst","internal/vpp/vpp.rst","internal/workers/index.rst","internal/workers/runner.rst","user/guide/index.rst","user/guide/preface.rst","user/index.rst","user/install.rst"],objects:{"":{"/api/v1/available_os_updates":[8,1,1,"post--api-v1-available_os_updates"],"/api/v1/available_os_updates/(int:available_os_update_id)":[8,3,1,"patch--api-v1-available_os_updates-(int-available_os_update_id)"],"/api/v1/ca_certificates/":[8,1,1,"post--api-v1-ca_certificates-"],"/api/v1/certificate_signing_requests":[8,1,1,"post--api-v1-certificate_signing_requests"],"/api/v1/certificate_signing_requests/(int:certificate_signing_request_id)":[8,3,1,"patch--api-v1-certificate_signing_requests-(int-certificate_signing_request_id)"],"/api/v1/certificates/":[8,1,1,"post--api-v1-certificates-"],"/api/v1/certificates/(int:certificate_id)":[8,3,1,"patch--api-v1-certificates-(int-certificate_id)"],"/api/v1/commands":[8,1,1,"post--api-v1-commands"],"/api/v1/commands/(int:command_id)":[8,3,1,"patch--api-v1-commands-(int-command_id)"],"/api/v1/configuration/organization":[16,1,1,"post--api-v1-configuration-organization"],"/api/v1/configuration/scep":[16,1,1,"post--api-v1-configuration-scep"],"/api/v1/device_groups":[8,1,1,"post--api-v1-device_groups"],"/api/v1/device_groups/(int:device_group_id)":[8,3,1,"patch--api-v1-device_groups-(int-device_group_id)"],"/api/v1/device_groups/(int:device_group_id)/devices":[8,1,1,"post--api-v1-device_groups-(int-device_group_id)-devices"],"/api/v1/device_groups/(int:device_group_id)/relationship/devices":[8,1,1,"post--api-v1-device_groups-(int-device_group_id)-relationship-devices"],"/api/v1/devices":[8,1,1,"post--api-v1-devices"],"/api/v1/devices/(int:device_id)":[8,3,1,"patch--api-v1-devices-(int-device_id)"],"/api/v1/devices/(int:device_id)/available_os_updates":[8,1,1,"post--api-v1-devices-(int-device_id)-available_os_updates"],"/api/v1/devices/(int:device_id)/commands":[8,1,1,"post--api-v1-devices-(int-device_id)-commands"],"/api/v1/devices/(int:device_id)/groups":[8,1,1,"post--api-v1-devices-(int-device_id)-groups"],"/api/v1/devices/(int:device_id)/installed_applications":[8,1,1,"post--api-v1-devices-(int-device_id)-installed_applications"],"/api/v1/devices/(int:device_id)/installed_certificates":[8,1,1,"post--api-v1-devices-(int-device_id)-installed_certificates"],"/api/v1/devices/(int:device_id)/installed_profiles":[8,1,1,"post--api-v1-devices-(int-device_id)-installed_profiles"],"/api/v1/devices/(int:device_id)/relationships/commands":[8,1,1,"post--api-v1-devices-(int-device_id)-relationships-commands"],"/api/v1/devices/(int:device_id)/relationships/tags":[8,1,1,"post--api-v1-devices-(int-device_id)-relationships-tags"],"/api/v1/devices/(int:device_id)/tags":[8,1,1,"post--api-v1-devices-(int-device_id)-tags"],"/api/v1/installed_applications":[8,1,1,"post--api-v1-installed_applications"],"/api/v1/installed_applications/(int:installed_application_id)":[8,3,1,"patch--api-v1-installed_applications-(int-installed_application_id)"],"/api/v1/installed_certificates":[8,1,1,"post--api-v1-installed_certificates"],"/api/v1/installed_certificates/(int:installed_certificate_id)":[8,3,1,"patch--api-v1-installed_certificates-(int-installed_certificate_id)"],"/api/v1/installed_profiles":[8,1,1,"post--api-v1-installed_profiles"],"/api/v1/installed_profiles/(int:installed_profile_id)":[8,3,1,"patch--api-v1-installed_profiles-(int-installed_profile_id)"],"/api/v1/profiles":[8,1,1,"post--api-v1-profiles"],"/api/v1/profiles/(int:profile_id)":[8,3,1,"patch--api-v1-profiles-(int-profile_id)"],"/api/v1/profiles/(int:profile_id)/relationships/tags":[8,1,1,"post--api-v1-profiles-(int-profile_id)-relationships-tags"],"/api/v1/push_certificates/":[8,1,1,"post--api-v1-push_certificates-"],"/api/v1/rsa_private_keys/(int:private_key_id)":[8,3,1,"patch--api-v1-rsa_private_keys-(int-private_key_id)"],"/api/v1/ssl_certificates/":[8,1,1,"post--api-v1-ssl_certificates-"],"/api/v1/tags":[8,1,1,"post--api-v1-tags"],"/api/v1/tags/(int:tag_id)":[8,3,1,"patch--api-v1-tags-(int-tag_id)"],"/api/v1/tags/(int:tag_id)/relationships/devices":[8,1,1,"post--api-v1-tags-(int-tag_id)-relationships-devices"],"/enroll/":[17,0,1,"get--enroll-"],"/enroll/ota":[17,0,1,"get--enroll-ota"],"/enroll/ota_authenticate":[17,1,1,"post--enroll-ota_authenticate"],"/enroll/profile":[17,1,1,"post--enroll-profile"],"/mdm":[19,4,1,"put--mdm"]},"/enroll/trust":{mobileconfig:[17,0,1,"get--enroll-trust.mobileconfig"]},"commandment.models":{Certificate:[21,6,1,""],CertificateSigningRequest:[22,6,1,""],Command:[23,6,1,""],CommandStatus:[23,6,1,""],Device:[24,6,1,""],InstalledApplication:[26,6,1,""],InstalledCertificate:[27,6,1,""],InstalledProfile:[28,6,1,""],Organization:[29,6,1,""],RSAPrivateKey:[31,6,1,""]},"commandment.models.Command":{find_by_uuid:[23,7,1,""],from_model:[23,7,1,""],get_next_device_command:[23,7,1,""]},"commandment.models.CommandStatus":{Acknowledged:[23,5,1,""],Invalid:[23,5,1,""],NotNow:[23,5,1,""],Queued:[23,5,1,""],Sent:[23,5,1,""]},"commandment.models.Device":{hex_token:[24,5,1,""]},"commandment.push":{apns_cxns:[32,5,1,""]},"commandment.runner":{runner_start:[40,5,1,""],runner_thread:[40,5,1,""],runner_time:[40,5,1,""]},"commandment.vpp":{"enum":[34,8,0,"-"],decorators:[33,8,0,"-"],errors:[35,8,0,"-"]},"commandment.vpp.decorators":{raise_error_replies:[33,9,1,""]},"commandment.vpp.enum":{LicenseAssociation:[34,5,1,""],LicenseAssociationType:[34,6,1,""],LicenseDisassociation:[34,5,1,""],LicenseDisassociationType:[34,6,1,""],VPPAsset:[34,5,1,""],VPPPricingParam:[34,6,1,""],VPPProductType:[34,6,1,""],VPPUserStatus:[34,6,1,""]},"commandment.vpp.enum.LicenseAssociationType":{ClientUserID:[34,5,1,""],SerialNumber:[34,5,1,""]},"commandment.vpp.enum.LicenseDisassociationType":{ClientUserID:[34,5,1,""],LicenseID:[34,5,1,""],SerialNumber:[34,5,1,""]},"commandment.vpp.enum.VPPPricingParam":{HighQuality:[34,5,1,""],StandardQuality:[34,5,1,""]},"commandment.vpp.enum.VPPProductType":{Application:[34,5,1,""],Publication:[34,5,1,""],Software:[34,5,1,""]},"commandment.vpp.enum.VPPUserStatus":{Associated:[34,5,1,""],Deleted:[34,5,1,""],Registered:[34,5,1,""],Retired:[34,5,1,""]},"commandment.vpp.errors":{VPPAPIError:[35,10,1,""],VPPError:[35,10,1,""],VPPErrorType:[35,6,1,""]},"commandment.vpp.errors.VPPAPIError":{errno:[35,5,1,""],message:[35,5,1,""]},"commandment.vpp.vpp":{VPP:[38,6,1,""],VPPDeviceLicenseOperation:[37,6,1,""],VPPLicenseOperation:[37,6,1,""],VPPUserLicenseOperation:[37,6,1,""]},"commandment.vpp.vpp.VPP":{assets:[38,11,1,""],bulk_update_licenses:[38,11,1,""],edit_user:[38,11,1,""],get_user:[38,11,1,""],licenses:[38,11,1,""],manage:[38,11,1,""],manage_device_licenses:[38,11,1,""],manage_user_licenses:[38,11,1,""],register_user:[38,11,1,""],retire_user:[38,11,1,""],save:[38,11,1,""],users:[38,11,1,""]},VPP:{AssociationProperties:[38,5,1,""],DisassociationProperties:[38,5,1,""]},VPPLicenseOperation:{_association_type:[37,5,1,""],_disassociation_type:[37,5,1,""]},commandment:{push:[32,8,0,"-"],runner:[40,8,0,"-"]}},objnames:{"0":["http","get","HTTP get"],"1":["http","post","HTTP post"],"10":["py","exception","Python exception"],"11":["py","method","Python method"],"2":["http","delete","HTTP delete"],"3":["http","patch","HTTP patch"],"4":["http","put","HTTP put"],"5":["py","attribute","Python attribute"],"6":["py","class","Python class"],"7":["py","classmethod","Python class method"],"8":["py","module","Python module"],"9":["py","function","Python function"]},objtypes:{"0":"http:get","1":"http:post","10":"py:exception","11":"py:method","2":"http:delete","3":"http:patch","4":"http:put","5":"py:attribute","6":"py:class","7":"py:classmethod","8":"py:module","9":"py:function"},terms:{"16f73":17,"26t23":6,"427e":38,"class":[21,22,23,24,26,27,28,29,31,34,35,37,38],"default":[29,37,38],"enum":[34,37,38],"function":33,"int":[6,7,8,24,34,35,37,38,40],"long":42,"new":[3,6,8],"null":24,"public":34,"return":[6,23,26,27,28,33,35,38],"static":11,"true":[19,38],"while":0,CMS:[12,19],For:3,NOT:0,Not:[6,10,16],Such:[19,29],TLS:41,The:[1,3,4,6,17,23,24,26,27,28,29,33,35,37,38,42],Then:3,There:[17,42],These:[21,29],With:19,_association_typ:37,_disassociation_typ:37,a444:38,abcdef:6,about:[0,6,8,10,16],accept:[6,7,8,10,16,37],access:11,access_log:11,account:42,acknowledg:[19,23],activ:3,adam:[34,37,38],adam_id:[37,38],add:[6,7,8,38],address:38,after:[17,40],against:28,air:17,aka:37,alemb:1,alia:34,all:[3,6,7,9,23,26,35,38,42],allow:42,alongsid:3,alreadi:[40,42],also:[3,17,42],alwai:[11,42],anaconda:3,ani:[23,33,35,42],annot:[1,3],anywai:1,api:[1,5,7,8,10,13,16,34,35,37,38],apn:[24,32,41],apns2:24,apns_cxn:32,app:42,appl:[17,19,38,42],appli:[34,42],applic:[0,1,6,7,8,10,16,19,26,34],architectur:[4,5],aren:38,arg:37,argument:34,around:42,arrai:6,ascend:6,ascertain:28,ask:34,aspen:19,asset:[37,38],assign:[0,37,38],assigned_onli:38,associ:[7,8,26,34,37,38],association_typ:38,associationproperti:38,assum:3,attribut:[0,6,17,21,29],authent:[17,24],automat:42,avail:[10,16,19,23,42],available_os_upd:[6,7,8],available_os_update_id:[6,7,8],b137bef9efa2:38,back:[11,26,34],backend:4,bad:[10,16,19],base64:19,base:[21,22],basic:42,batch:[34,37,38],batch_token:38,becaus:3,been:[23,28,40],befor:3,begin:6,behind:11,being:[38,42],best:42,better:1,between:42,bin:12,binari:26,blog:42,blueprint:[18,20],bodi:[19,33,38],bool:38,both:[3,27],brew:[3,11],build:[3,4,5],bulk_update_licens:38,bundl:42,busi:23,c020000000000:17,ca_certif:[6,7,8],cacert:6,call:[3,38],can:[2,3,11,26,34,38,42],cannot:23,capabl:19,capac:0,cde3:38,cellar:12,certain:38,certif:[5,7,8,9,11,17,20,22,24,25,27,29,32,41],certificate_id:[6,7,8,24],certificate_signing_request:[6,7,8],certificate_signing_request_id:[6,7,8],certificatelist:27,certificaterequest:[20,25],certificatesigningrequest:22,challeng:17,chang:[0,2,3,34],channel:19,charset:19,check:[0,23,33],checkbox:42,classmethod:23,client:[11,20,24,34,36],client_user_id:38,clientuserid:34,clientuseridstr:38,clone:3,cmd:23,cms:12,code:[3,6,10,16,19,35],collect:[6,7,8],column:23,com:[38,42],combin:34,comma:6,command:[2,3,4,5,6,8,9,11,15,19,20,21,22,24,25,26,27,28,29,31,32,33,34,35,36,37,38,40,41,42],command_id:[6,7,8],commandstatu:23,commit:23,compil:2,complet:23,complex:0,compon:1,composit:26,configur:[10,17,18,20,29,40],connect:[11,19,32,42],consid:23,contact:42,contain:[3,17,18,28,32,38],content:[6,7,8,10,13,16,19,28],context:40,conveni:38,copi:42,copyright:[32,40],correspond:38,count:[6,38],cover:[3,4],creat:[3,6,7,8,10,16,23,26],create_app:11,criteria:38,crt:11,csr:42,css:1,current:[3,35,38,40],cursor:38,d1971f9dd5f8e67bdd:38,dai:40,data:[6,19],databas:[1,23,40],date:[0,38],deb:11,decod:38,decor:[20,36],defin:21,delet:[6,7,8,34],deliv:[17,19,23],deliveri:17,delta:[0,38],denot:6,depend:[4,5],deploi:11,depth:42,der:12,descend:6,describ:23,detach:19,detail:[6,8,9,17,29,32,36,40,42],determin:11,dev:[2,6,11],develop:[2,3,13,42],devic:[0,5,6,7,9,11,17,20,23,25,26,27,28,34,37,38,41],device_cert_check:15,device_group:[6,7,8],device_group_id:[6,7,8],device_id:[6,7,8],dict:[32,33,38],dictionari:[23,32],differ:42,dir:3,direct:33,directori:[2,3],disassoci:[34,37,38],disassociation_typ:38,disassociationproperti:38,doc:11,document:17,doe:[28,34],don:[3,34],done:[3,42],download:[3,42],dynam:0,each:[2,6,26,42],easi:3,ebook:34,edit:38,edit_us:38,email:38,empti:[17,19],enabl:42,encod:[19,23,24],encrypt:42,end:[4,6],endpoint:[9,13,17,19,20,38],enrol:[0,8,10,16,18,20,23,24,27,28,42],enterpris:42,entir:28,enumer:35,environ:4,envis:40,errno:35,error:[10,11,16,20,33,36],error_log:11,errornumb:35,es5:1,etc:40,everi:26,exampl:[6,11,17],except:[33,35],exclus:34,execut:38,exist:42,expect:[1,9,38],explain:[4,23],explan:42,extra:42,extract:42,f33d9e0f:38,facilitator_member_id:38,fail:23,fals:[17,38],far:42,fetch:[3,6,38],few:42,field:6,file:[32,40],filter:6,find:23,find_by_uuid:23,first:[3,17,38,40],fit:1,fix:21,flask:[1,11,13,20],folder:3,follow:[1,9],footnot:[2,42],found:[6,10,16],framework:1,from:[2,3,17,23,33,34,37,38,42],from_model:23,front:4,frontend:4,gener:[0,17,35,42],get:[0,3,4,6,7,8,10,16,17,23,38,41,42],get_next_device_command:23,get_us:38,git:3,give:42,given:[17,23,38],gloss:42,gone:19,group:[0,6,7,8],guid:[5,13,42,43],handl:[1,19],has:[0,3,17,23,38,40,42],hash:38,have:[0,3,21,28,42],header:[6,7,8,10,16,19],here:[3,17,23,26],hex:24,hex_token:24,high:34,highqual:34,home:[3,10,16,29],homebrew:3,hostnam:3,how:[0,4,41,42],html:11,http:[6,11,38],http_x_client_cert:11,iOS:26,ident:41,identifi:[0,26,38],idl:19,imei:17,immedi:2,impact:3,imperson:42,imposs:26,includ:[11,27,32,38,40,42],include_license_count:38,include_retir:38,incom:19,index:13,inform:[8,10,12,16,42],infrastructur:42,inherit:22,insid:[2,3,23],instal:[4,11,27,28,42],installed_appl:[6,7,8,26],installed_application_id:[6,7,8],installed_certif:[6,7,8,27],installed_certificate_id:[6,7,8],installed_profil:[6,7,8,28],installed_profile_id:[6,7,8],installedappl:[20,25],installedapplicationlist:26,installedcertif:[20,25],installedprofil:[20,25],instanc:[3,23,38],instead:3,intend:[21,42],interfac:38,intern:[10,13,16,21],invalid:[19,23],invers:26,invitecod:38,inviteurl:38,iphon:17,isn:42,isol:3,issu:[17,21,42],item:6,its:42,its_id_hash:38,itself:24,itun:[37,38],jess:[32,40,42],joe:17,join:28,json:[1,7,8,9,10,16,23,38],jsonapi:[1,6],juser:17,just:42,keep:3,kei:[11,26,31,32,38],kind:35,knowledg:42,kwarg:[21,22,23,24,26,27,28,29,31,37],last:38,latest:11,layer:1,learn:41,length:[21,38],licens:[20,32,34,36,38,40],license_association_typ:37,license_disassociation_typ:37,licenseassoci:34,licenseassociationtyp:[34,37,38],licensedisassoci:34,licensedisassociationtyp:[34,37,38],licenseid:34,like:42,link:6,linux:11,list:[3,6,8,38],listen:[11,42],live:2,local:[3,12],localhost:38,locat:[3,11],log:11,lot:42,maco:[3,4,11,17,26],macpro6:17,made:17,mai:[24,38],mail:38,main:38,make:[3,42],manag:[0,1,11,27,37,38],manage_device_licens:38,manage_user_licens:38,managed_apple_id:38,managevpplicensesbyadamidsrv:38,map:38,mark:6,marshmallow:1,match:[23,38],mdm:[6,7,8,10,15,16,18,20,21,23,29,37,38,41],mdmcert:42,meid:17,membership:0,messag:[19,35],meta:6,metadata:6,method:[23,42],mgmt:42,micromdm:42,migrat:1,minu:6,mit:[32,40],mix:3,mobileconfig:17,model:[0,1,13,20,21,22,23,24,26,27,28,29,31],modifi:38,modul:[3,13],more:[0,38],most:38,move:3,multipl:[0,3],muse:0,mutual:34,mzfinanc:38,name:[21,26,29],necessari:24,need:[3,26,40,42],next:[19,23],node:3,none:[2,37,38],nonetyp:[37,38],normal:[3,42],not_aft:6,not_befor:6,note:21,notif:42,notifi:38,notnow:[19,23],notonconsol:17,noverifi:12,now:[3,23,42],npm:2,number:[6,34,37,38],nvm:3,object:[6,7,8,37,38],offici:3,often:26,one:[17,37,42],onli:[4,18,21,37,38],openssl:12,oper:[20,34,36,38],option:[38,42],optional_no_ca:11,org:[11,29],organ:[5,9,16,20,25,38],orm:[13,20],os_vers:0,ota:17,ota_authent:17,other:[3,9,10,16,29,42],our:[17,28],out:40,outsid:27,over:[17,42],own:[3,42],packag:[3,36],page:[6,13,17,38],pair:34,param:38,paramet:[6,23,34,37,38],parse_plist_input_data:15,part:[3,26],pass:11,passenger_en:11,patch:[6,7,8,10,16],path:11,payload:[17,42],pem_certif:6,perform:[1,38],persist:1,peterson:[32,40,42],phase:17,piec:34,pip3:[3,11],pip:3,plist:[17,19],plu:[34,38],plugin:11,pocoo:11,point:4,poke:42,polymorph:[21,22],popul:38,possibl:[0,23,35],post:[6,7,8,10,16,17,42],pre:38,predic:0,prefac:[41,43],prefer:42,prerequisit:[11,42],previou:17,previous:42,price:[34,37,38],pricing_param:[37,38],pricingparam:34,privat:31,private_key_id:[6,7,8],privatekei:[20,25],problem:0,process:[3,23],product:[17,34,37,38],profil:[6,7,8,17,20,25,27,28,29,42],profile_id:[6,7,8],profilelist:28,project:3,prompt:3,protocol:42,prove:42,provid:[3,38,42],purchas:42,purpos:[3,6],push:[13,20,24,42],push_certif:[6,7,8],put:19,python3:[3,11],python:[1,2,11],qualiti:[34,37,38],queri:[6,26,27,28],queu:23,queue:[0,23],rais:[33,35],raise_error_repli:33,react:1,readi:23,readthedoc:11,reason:[3,26],recent:38,recommend:[3,42],record:38,redux:1,refer:[11,13],regardless:34,regist:[34,38],register_us:38,relat:21,relationship:[6,7,8],remain:[19,38],remov:[0,38],repli:[12,33,38],report:26,repositori:[2,3],repres:[17,23,24,26,27,28,33,34,37,38],represent:35,request:[6,7,8,9,10,16,17,19,22,29,37,38,42],requir:[3,17,24,29,34,42],resolv:0,respond:17,respons:[6,7,8,9,10,16,19,23,27,28,33],rest:[1,5,13,18],result:[2,38],retir:[34,38],retire_us:38,retriev:[6,7,8,10,16,24,38],rfc5280:21,right:23,root:11,routin:40,row:26,rpc:1,rsa:31,rsa_private_kei:[6,7,8],rsaprivatekei:31,rule:6,run:[1,2,3,21,40,41],runner:[20,39],runner_start:40,runner_thread:40,runner_tim:40,same:[0,17,42],save:38,scep:[10,16,17,21,42],schema:1,script:2,search:13,second:[17,40,42],section:42,secur:42,see:[2,17,32,40],self:[6,42],semant:1,send:42,sens:42,sent:[17,23,42],separ:[3,6,40],serial:[1,17,34,37,38],serialnumb:34,server:[2,10,11,16,42],server_nam:11,servic:[17,21,29,33,35,38,42],service_config:38,set:[4,38,42],setup:3,sever:[2,29,42],share:0,ship:3,should:[0,3,11,17,18,23],show:17,sign:[17,22,42],signatur:19,signmessag:19,sinc:[38,42],since_modified_token:38,singl:[22,23,26,27,28,34,37],size:[6,26],slow:0,sock:11,softwar:[34,38],solut:0,some:[3,34,42],someon:42,someth:3,sometim:26,somewher:3,sort:[6,40],sourc:[1,21,22,23,24,26,27,28,29,31,33,34,35,37,38],special:42,specif:[3,8,22],specifi:[7,17,23,37],sqlalchemi:[1,10,13,20,23],ssl:[11,42],ssl_certif:[6,7,8,11],ssl_certificate_kei:11,ssl_client_cert:11,ssl_protocol:11,ssl_verify_cli:11,stage:2,standalon:40,standard:[1,9,34,37,38],standardqu:34,start:[2,40,41],state:[1,23],statu:[6,10,16,19,34,38],stdq:[34,37,38],step:[2,17,42],still:34,stoken:38,storag:0,store:[6,11,21,37,38],str:[23,24,34,35,37,38],string:[23,24,38],subclass:[23,38],subdirectori:3,subject:6,submit:[19,38],subsequ:[0,40],success:[10,16],successfulli:17,summari:9,suppli:38,sure:42,system:[3,6],tabl:[21,22,23,24,26,27,28,29],tag:[6,7,8],tag_id:[6,7,8],termin:11,test:[3,38],than:[1,38],thei:17,therefor:[11,26,28],thi:[1,3,4,8,17,18,19,23,24,26,27,28,35,37,38,40,42],thing:38,thread:[13,20,40],thu:40,tied:3,time:[3,4,17,26,38,40],timer:40,tlsv1:11,tmp:[11,12],todo:23,token:[24,38],too:0,tool:3,topic:32,total:38,transpil:1,trust:[17,42],try_fil:11,tupl:34,turn:[23,42],two:[17,42],txt:[3,32,40],type:[1,3,6,7,8,10,16,17,19,20,21,23,36,37,38],typescript:1,udid:17,unabl:[11,23],unassign:38,under:[32,40],understand:42,union:[37,38],uniqu:[26,38],unix:11,unregist:38,unus:38,updat:[0,6,7,8,10,16,38],uri:11,use:[1,2,3,38,42],used:[3,21,29,35,38,42],user:[13,17,19,34,37,38],user_id:38,userid:[17,38],userlongnam:17,usershortnam:17,uses:[1,3],using:[1,3,11,24,35,42],usr:[3,12],usual:[3,27,38],utf:19,uuid:[23,28,38],uwsgi_param:11,uwsgi_pass:11,valid:[10,11,16,34],valu:[34,38],vendor:42,venv:3,verifi:12,version:[3,6,17,26],via:[1,42],virtual:3,vnd:[6,7,8],vpp:[13,20,33],vpp_service_config_url:38,vppapierror:[33,35],vppasset:34,vppdevicelicenseoper:[37,38],vpperror:35,vpperrortyp:35,vpplicensecursor:38,vpplicenseoper:[37,38],vpppricingparam:[34,38],vppproducttyp:34,vppserviceconfigsrv:38,vppusercursor:38,vppuserlicenseoper:[37,38],vppuserstatu:34,wai:42,want:[2,3,38],web:41,webobject:38,webpack:2,well:1,were:27,what:[0,1],whatev:42,when:[0,35,40,42],where:29,whether:28,which:[1,3,33,34,37,38,42],why:[26,42],wipe:26,within:3,woa:38,won:[26,42],work:[2,3,26,42],worker:[13,20],would:3,wrap:33,wrapper:38,written:[1,3],xml:19,yarn:3,year:42,you:[2,3,11,38,42],your:[3,38,42],zero:3},titles:["Profile Install via Tag","Architecture","Building","Dependencies","Developer Guide","Developer Documentation","Certificates","Commands","Devices","REST API Documentation","Organization","Nginx Configuration","&lt;no title&gt;","Welcome to commandment&#8217;s documentation!","Internal Documentation","Decorators","Configuration Blueprint","Enrollment Blueprint","Flask Endpoints","MDM Blueprint","Internals Reference","Certificate","CertificateRequest","Command","Device","ORM (SQLAlchemy) Models","InstalledApplication","InstalledCertificate","InstalledProfile","Organization","Profile","PrivateKey","push","Decorators","VPP Types","VPP Errors","VPP","VPP License Operations","VPP Client","Worker Threads","runner","User Guide","Preface","User Documentation","Installation"],titleterms:{TLS:42,With:11,api:[6,9],apn:42,architectur:1,backend:[1,2,3],blueprint:[16,17,19],build:2,certif:[6,21,42],certificaterequest:22,client:38,command:[7,13,23],configur:[11,16],decor:[15,33],depend:3,detail:7,develop:[4,5],devic:[8,24,42],document:[5,9,13,14,43],end:3,endpoint:[6,18],enrol:17,environ:3,error:35,flask:18,front:3,frontend:[1,2],guid:[4,41],gunicorn:11,ident:42,indic:13,instal:[0,3,44],installedappl:26,installedcertif:27,installedprofil:28,intern:[14,20],json:6,licens:37,mdm:[19,42],model:25,nginx:11,nodej:3,oper:37,organ:[10,29],orm:25,other:6,passeng:11,phusion:11,prefac:42,privatekei:31,profil:[0,30],push:32,python:3,refer:20,rest:9,runner:40,set:3,sqlalchemi:25,summari:7,tabl:13,tag:0,thread:39,todo:40,type:34,user:[41,43],uwsgi:11,via:0,virtualenv:3,vpp:[34,35,36,37,38],web:42,welcom:13,worker:39}})