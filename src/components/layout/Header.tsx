
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

const Header = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="animate-fade-in">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full px-5 py-4">
          {/* Layup Logo SVG */}
          <svg width="108" height="26" viewBox="0 0 108 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[107.497px] h-[25px] relative">
            <path d="M106.666 9.44299C106.14 8.42017 105.346 7.55924 104.37 6.9518C103.382 6.33966 102.24 6.02265 101.078 6.03808C100.186 6.02281 99.3033 6.22215 98.5044 6.61932C98.1412 6.80449 97.8029 7.0349 97.4975 7.30505V6.03808H93.608V25.5H97.498V18.6752C97.8043 18.9461 98.1424 19.1787 98.5049 19.3677C99.3011 19.7736 100.185 19.9779 101.078 19.9627C102.24 19.9781 103.382 19.6611 104.37 19.0489C105.347 18.4416 106.141 17.5807 106.667 16.5578C107.213 15.4514 107.497 14.2341 107.497 13.0001C107.497 11.7662 107.213 10.5488 106.667 9.44248L106.666 9.44299ZM103.36 14.8833C103.091 15.4108 102.678 15.852 102.171 16.1568C101.638 16.4681 101.03 16.6262 100.414 16.6138C99.9549 16.6313 99.4978 16.5502 99.073 16.3758C98.6483 16.2015 98.2659 15.938 97.9517 15.6031C97.3088 14.8873 96.9711 13.9482 97.0111 12.9866C96.9988 12.3381 97.1459 11.6965 97.4395 11.1182C97.7095 10.5905 98.1216 10.1488 98.6293 9.84322C99.171 9.52989 99.7884 9.37187 100.414 9.38648C101.03 9.37404 101.638 9.53209 102.171 9.84322C102.679 10.1486 103.091 10.5903 103.361 11.1182C103.655 11.6963 103.802 12.338 103.79 12.9866C103.804 13.6442 103.656 14.2953 103.36 14.8826V14.8833Z" fill="#182331"></path>
            <path d="M87.2177 6.0373V13.0313C87.2104 13.8371 86.8854 14.6074 86.3134 15.1747C85.7414 15.7419 84.9686 16.0601 84.1633 16.0601C83.3579 16.0601 82.5852 15.7419 82.0132 15.1747C81.4411 14.6074 81.1161 13.8371 81.1088 13.0313V6.0373H77.2188V13.0313C77.2497 14.8539 77.9949 16.5913 79.2939 17.8692C80.5929 19.1471 82.3417 19.8632 84.1634 19.8632C85.9851 19.8632 87.7339 19.1471 89.0329 17.8692C90.3319 16.5913 91.0771 14.8539 91.108 13.0313V6.0373H87.2177Z" fill="#182331"></path>
            <path d="M70.5817 6.03735L66.612 13.5214L62.6422 6.03735H58.5026L64.542 17.4235L60.2585 25.4983H64.3981L74.7211 6.03635L70.5817 6.03735Z" fill="#182331"></path>
            <path d="M52.1142 6.03731V7.30427C51.8088 7.03412 51.4705 6.80372 51.1073 6.61855C50.3084 6.22138 49.4259 6.02204 48.5339 6.03731C47.372 6.02187 46.2298 6.33889 45.2418 6.95103C44.2653 7.55848 43.4716 8.41939 42.9452 9.44221C42.3991 10.5486 42.115 11.7659 42.115 12.9999C42.115 14.2338 42.3991 15.4512 42.9452 16.5575C43.4716 17.5804 44.2652 18.4413 45.2418 19.0487C46.2298 19.6608 47.372 19.9778 48.5339 19.9624C49.4274 19.9776 50.311 19.7733 51.1073 19.3674C51.4698 19.1784 51.8079 18.9458 52.1142 18.6749V19.9624H56.0042V6.03781L52.1142 6.03731ZM49.198 16.612C48.5816 16.6244 47.9737 16.4663 47.4414 16.155C46.9335 15.8503 46.5213 15.4091 46.2516 14.8815C45.9555 14.2941 45.8082 13.6429 45.8226 12.9851C45.8102 12.3365 45.9575 11.6948 46.2516 11.1167C46.5212 10.5887 46.9334 10.147 47.4414 9.8417C47.9738 9.5306 48.5816 9.37255 49.198 9.38496C49.8236 9.37031 50.4411 9.52834 50.9829 9.8417C51.4905 10.1474 51.9026 10.589 52.1726 11.1167C52.4663 11.695 52.6134 12.3366 52.6011 12.9851C52.641 13.9467 52.3034 14.8857 51.6605 15.6015C51.3462 15.9366 50.9637 16.2003 50.5389 16.3748C50.114 16.5493 49.6567 16.6305 49.1978 16.613L49.198 16.612Z" fill="#182331"></path>
            <path d="M30.8326 16.0695V0.499998H26.9426V19.9619H39.6144V16.0695H30.8326Z" fill="#182331"></path>
            <path d="M14.3941 5.92412H14.3963C14.474 5.92366 14.5508 5.90768 14.6223 5.87711C14.6937 5.84655 14.7583 5.80201 14.8123 5.74612C14.8651 5.69112 14.9066 5.62625 14.9343 5.55521C14.9621 5.48417 14.9756 5.40836 14.9741 5.33209C14.9725 5.25583 14.956 5.18062 14.9254 5.11075C14.8948 5.04088 14.8508 4.97773 14.7958 4.9249C13.4306 3.61446 11.6117 2.88317 9.71981 2.88405C7.82795 2.88494 6.00974 3.61794 4.6457 4.92965C4.54166 5.03511 4.48183 5.17636 4.47844 5.32451C4.47504 5.47266 4.52835 5.61651 4.62747 5.72662C4.67817 5.78329 4.73963 5.82934 4.80824 5.86208C4.87686 5.89482 4.95129 5.91361 5.02722 5.91737C5.10448 5.92118 5.18171 5.90954 5.25442 5.88314C5.32713 5.85674 5.39385 5.81612 5.45069 5.76362C6.59966 4.66132 8.12987 4.04589 9.72164 4.04589C11.3134 4.04589 12.8436 4.66132 13.9926 5.76362C14.1004 5.86738 14.2445 5.92496 14.3941 5.92412Z" fill="#182331"></path>
            <path d="M2.46672 5.24289C2.55549 5.24265 2.64301 5.22201 2.72254 5.18257C2.80207 5.14312 2.87149 5.08593 2.92543 5.0154C3.72535 3.97225 4.75437 3.12721 5.93289 2.54566C7.11142 1.96411 8.40786 1.66164 9.7219 1.66164C11.0359 1.66164 12.3324 1.96411 13.5109 2.54566C14.6894 3.12721 15.7185 3.97225 16.5184 5.0154C16.5646 5.07605 16.6224 5.12692 16.6884 5.16507C16.7544 5.20322 16.8273 5.22789 16.9029 5.23764C17.0166 5.25262 17.1321 5.23352 17.2349 5.18277C17.3378 5.13202 17.4232 5.0519 17.4805 4.95254C17.5379 4.85318 17.5644 4.73904 17.5569 4.62456C17.5494 4.51009 17.5081 4.40041 17.4383 4.30942C16.5301 3.12508 15.3618 2.16566 14.0238 1.5054C12.6857 0.845136 11.2138 0.501722 9.7219 0.501722C8.23 0.501722 6.75809 0.845136 5.42005 1.5054C4.082 2.16566 2.9137 3.12508 2.00551 4.30942C1.93956 4.39541 1.89899 4.49818 1.88843 4.60606C1.87786 4.71394 1.89771 4.82263 1.94572 4.9198C1.99373 5.01698 2.06799 5.09875 2.16008 5.15585C2.25216 5.21295 2.35839 5.24311 2.46672 5.24289Z" fill="#182331"></path>
            <path d="M18.7664 6.69385C18.723 6.63116 18.6677 6.57768 18.6036 6.53649C18.5395 6.49531 18.4678 6.46722 18.3928 6.45385C16.8332 6.17595 15.2295 6.28101 13.7195 6.75999C12.2094 7.23898 10.8381 8.07757 9.72331 9.20377C8.60849 8.07765 7.23717 7.23909 5.72711 6.76011C4.21705 6.28113 2.61337 6.17603 1.05377 6.45385C0.90239 6.48113 0.768042 6.56747 0.680283 6.69387C0.592525 6.82026 0.558548 6.97636 0.585815 7.12783C0.613082 7.2793 0.699364 7.41372 0.825684 7.50153C0.952004 7.58934 1.10801 7.62335 1.25939 7.59606C1.76534 7.50512 2.27836 7.45927 2.79242 7.45907C2.79381 7.45873 2.79528 7.45873 2.79667 7.45907C4.02856 7.45873 5.24599 7.72461 6.3657 8.23852C7.48541 8.75244 8.48098 9.50227 9.28433 10.4367C9.28908 10.4422 9.29532 10.4465 9.30007 10.4517C9.30482 10.457 9.30857 10.4635 9.31356 10.4682C9.32356 10.4782 9.33555 10.4857 9.34604 10.4952C9.36053 10.5075 9.37452 10.5202 9.39001 10.5312C9.40784 10.5433 9.42637 10.5543 9.44548 10.5642C9.46051 10.5734 9.47601 10.5818 9.49195 10.5892C9.51446 10.5983 9.53748 10.6061 9.56091 10.6125C9.57515 10.6165 9.58914 10.6222 9.60363 10.6255C9.63983 10.6328 9.67663 10.6368 9.71356 10.6372C9.71606 10.6372 9.71906 10.6372 9.72156 10.6372H9.72305H9.72605C9.78683 10.6362 9.84704 10.6255 9.90444 10.6055C9.91543 10.6015 9.92617 10.5987 9.93716 10.5945C9.9923 10.5726 10.0437 10.5424 10.0896 10.5047C10.0931 10.5017 10.0976 10.5007 10.1013 10.498C10.1151 10.4862 10.1263 10.473 10.1373 10.46C10.1453 10.4515 10.155 10.4447 10.1623 10.435C10.9658 9.5005 11.9615 8.75069 13.0814 8.23686C14.2013 7.72303 15.4189 7.45729 16.6509 7.45782C16.6525 7.45751 16.6541 7.45751 16.6557 7.45782C17.1693 7.45801 17.6819 7.50385 18.1875 7.59481C18.3004 7.61522 18.4168 7.60167 18.5219 7.55588C18.6271 7.51009 18.7164 7.4341 18.7784 7.33755C18.8404 7.241 18.8724 7.12821 18.8704 7.01345C18.8683 6.89869 18.8323 6.78712 18.7669 6.69285L18.7664 6.69385Z" fill="#182331"></path>
            <path d="M12.0252 5.97061C11.3185 5.58776 10.5275 5.38726 9.72378 5.38726C8.9201 5.38726 8.12909 5.58776 7.42234 5.97061C7.35538 6.00691 7.29622 6.05604 7.24823 6.11521C7.20024 6.17438 7.16438 6.24243 7.14267 6.31547C7.12097 6.38852 7.11385 6.46512 7.12174 6.54092C7.12962 6.61671 7.15235 6.69021 7.18862 6.75721C7.22489 6.82422 7.274 6.88341 7.33314 6.93143C7.39227 6.97945 7.46028 7.01534 7.53328 7.03706C7.60628 7.05877 7.68284 7.06589 7.75859 7.058C7.83434 7.05011 7.90778 7.02738 7.97475 6.99108C8.51184 6.70021 9.11293 6.54788 9.72364 6.54788C10.3344 6.54788 10.9354 6.70021 11.4725 6.99108C11.4961 7.00378 11.5206 7.01481 11.5458 7.02408L11.5548 7.06033L11.7464 7.06208H11.7509C11.8802 7.0623 12.006 7.01923 12.1081 6.93973C12.2102 6.86023 12.2828 6.74887 12.3144 6.62333C12.346 6.49779 12.3348 6.36528 12.2824 6.24688C12.2301 6.12848 12.1398 6.03097 12.0257 5.96986L12.0252 5.97061Z" fill="#182331"></path>
            <path d="M8.88866 12.3416C8.99008 12.2355 9.04765 12.0949 9.04983 11.9481C9.052 11.8012 8.99863 11.659 8.9004 11.5499C7.99765 10.554 6.89881 9.75563 5.67292 9.20498C5.60581 9.15705 5.5291 9.12429 5.44808 9.10899C4.72927 8.80572 3.97668 8.58985 3.20648 8.46601C3.19573 8.46351 3.18599 8.45875 3.175 8.45701C3.14721 8.45284 3.11915 8.45075 3.09106 8.45076C2.62646 8.38138 2.15743 8.34595 1.68769 8.34476C1.33591 8.35101 0.960155 8.36476 0.600132 8.40476C0.469353 8.41946 0.347443 8.47818 0.254387 8.57129C0.16133 8.6644 0.102635 8.78638 0.087942 8.91724C0.0296485 9.35322 0.0002719 9.79259 0 10.2325C0.0112101 12.2212 0.626048 14.1596 1.76303 15.7908C2.90002 17.422 4.5055 18.669 6.36675 19.3667C6.41316 19.3835 6.46152 19.3942 6.51065 19.3987L6.52165 19.4032L6.58385 19.4012C6.66012 19.3988 6.73517 19.3814 6.8047 19.35C6.87423 19.3185 6.93688 19.2736 6.98902 19.2179C7.04116 19.1621 7.08178 19.0966 7.10854 19.0251C7.13531 18.9536 7.14771 18.8775 7.145 18.8012C7.14276 18.756 7.02933 14.2761 8.88866 12.3416ZM3.54428 10.232C3.54428 10.0617 3.55302 9.89097 3.56701 9.72072C3.96688 9.81183 4.35979 9.9312 4.74277 10.078C4.74511 10.8339 4.91957 11.5793 5.25292 12.2577C5.58626 12.936 6.06971 13.5294 6.66655 13.9928C6.51613 14.4464 6.39357 14.9088 6.29953 15.3773C5.4507 14.8147 4.75467 14.0501 4.27384 13.1521C3.79301 12.2541 3.54218 11.2507 3.54428 10.232ZM7.13451 12.8649C6.50253 12.2817 6.08622 11.5018 5.95325 10.6519C6.58536 11.0132 7.16873 11.4538 7.68916 11.9631C7.47801 12.2467 7.29241 12.5485 7.13451 12.8649ZM6.10115 16.6133C6.04094 17.1192 6.00947 17.5785 5.99423 17.95C4.43235 17.1992 3.13587 15.9905 2.27713 14.4846C1.41839 12.9787 1.03808 11.2469 1.18675 9.51947C1.35615 9.50972 1.52329 9.50523 1.68644 9.50523C1.93153 9.50523 2.17563 9.51822 2.41847 9.53972C2.28294 10.9488 2.5587 12.367 3.21233 13.6225C3.86597 14.878 4.86942 15.9168 6.10115 16.6133Z" fill="#0D6FFB"></path>
            <path d="M19.3607 8.93851C19.3607 8.93001 19.3587 8.92201 19.3577 8.91351V8.9035C19.3577 8.89676 19.3542 8.89076 19.3532 8.88426C19.3486 8.85549 19.3419 8.82709 19.3332 8.79926C19.3292 8.78751 19.3237 8.77676 19.3192 8.76551C19.3105 8.74271 19.3004 8.7205 19.2888 8.69901C19.2813 8.68576 19.2723 8.67402 19.2638 8.66052C19.2521 8.6423 19.2395 8.62476 19.2258 8.60801C19.2158 8.59626 19.2048 8.58602 19.1941 8.57527C19.1784 8.55862 19.1617 8.543 19.1441 8.52852C19.1411 8.52544 19.1379 8.52252 19.1346 8.51977C19.1266 8.51327 19.1169 8.50927 19.1084 8.50352C19.0896 8.49033 19.0701 8.47832 19.0499 8.46752C19.0346 8.45976 19.0188 8.45283 19.0027 8.44677C18.9845 8.43927 18.9665 8.43177 18.947 8.42602C18.9273 8.42077 18.9074 8.41652 18.8873 8.41327C18.8745 8.41102 18.8623 8.40652 18.8493 8.40477C18.8403 8.40477 18.8316 8.40477 18.8223 8.40277H18.8178C17.351 8.24375 15.8673 8.42054 14.4788 8.91978C13.0904 9.41902 11.8335 10.2276 10.8034 11.2845C9.77325 12.3413 8.99678 13.6187 8.53268 15.02C8.06858 16.4214 7.92903 17.9099 8.12455 19.3732V19.3817C8.12455 19.3889 8.12579 19.3962 8.12679 19.4034C8.12779 19.4107 8.13079 19.4144 8.13154 19.4202C8.13843 19.4624 8.15009 19.5036 8.16627 19.5432C8.16977 19.5519 8.17277 19.5607 8.17677 19.5682C8.1959 19.6106 8.22005 19.6505 8.24871 19.6872C8.25021 19.6894 8.25272 19.6912 8.25422 19.6929C8.25572 19.6947 8.26046 19.6987 8.26295 19.7019C8.2919 19.7354 8.32469 19.7654 8.36064 19.7912C8.36988 19.7982 8.37948 19.8048 8.38939 19.8109C8.42711 19.8357 8.4676 19.8559 8.51005 19.8712C8.51305 19.8712 8.5153 19.8742 8.5183 19.8752H8.52054C8.55873 19.8875 8.59808 19.8959 8.63798 19.9002C8.99848 19.9399 9.36086 19.9598 9.72354 19.9599C10.1631 19.9594 10.6022 19.9293 11.0377 19.8697C13.5885 19.52 15.8968 18.1729 17.4569 16.1236C19.017 14.0743 19.7018 11.4898 19.3612 8.93626L19.3607 8.93851ZM17.4579 9.51074L15.1251 11.9037V9.92548C15.8796 9.6791 16.6648 9.53942 17.4579 9.51049V9.51074ZM16.0443 16.0085L12.6922 16.0623L14.8158 13.8831H17.4734C17.1062 14.6592 16.6243 15.3756 16.0441 16.0083L16.0443 16.0085ZM13.9656 13.0931L11.8852 15.2271V11.8522C12.5034 11.2676 13.2046 10.7777 13.9661 10.3985L13.9656 13.0931ZM10.7249 16.418L9.19413 17.9887C9.21274 16.2764 9.74614 14.6094 10.7249 13.2046V16.418ZM11.5429 17.243L14.7159 17.193C13.3473 18.1817 11.7154 18.74 10.0284 18.7967L11.5429 17.243ZM15.9466 12.7219L18.2846 10.322C18.277 11.1352 18.1541 11.9432 17.9196 12.7219H15.9466Z" fill="#0D6FFB"></path>
          </svg>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="text-dark font-semibold text-[14px] font-poppins">
                Switch to User
              </div>
              
              {/* Vertical divider line */}
              <Separator orientation="vertical" className="h-6 bg-[#D9D9D9]" />
              
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="text-dark font-semibold text-[14px] font-poppins">
                  Welcome Layup Admin
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/lovable-uploads/412aab9f-da03-46d8-a2c8-0cdf3d143751.png" />
                    <AvatarFallback className="bg-blue-light/50">LA</AvatarFallback>
                  </Avatar>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {userDropdownOpen && (
                <div className="absolute right-5 top-14 bg-white shadow-lg rounded-lg p-3 min-w-40 z-10">
                  <div className="flex flex-col gap-2 w-full">
                    <button className="text-sm text-left hover:bg-blue-light/20 px-3 py-2 rounded transition-colors">
                      Profile
                    </button>
                    <button className="text-sm text-left hover:bg-blue-light/20 px-3 py-2 rounded transition-colors">
                      Settings
                    </button>
                    <Separator className="my-1" />
                    <button className="text-sm text-left text-red-500 hover:bg-red-50 px-3 py-2 rounded transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-[#F2F3F4]"></div>
      </div>
    </header>
  );
};

export default Header;
