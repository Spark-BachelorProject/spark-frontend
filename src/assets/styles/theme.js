//                                             LIGHT : DARK
export const lightTheme = {         
  white:               '#fff',      //         white -> white
  checkboxBg:          '#fff',      //         white -> slate750
  inputBg:             '#fff',      //         white -> slate750
  navbarBg:            '#fff',      //         white -> slate750
  modalBg:             '#fff',      //         white -> slate800
  secondaryBg:         '#fff',      //         white -> slate800

  mainDivider:         '#f8fafc',   //         slate50 -> slate750
  addPostBg:           '#f8fafc',   //         slate50 -> slate750
  attendingCounterBg:  '#f8fafc',   //         slate50 -> slate750
  modalBorder:         '#f8fafc',   //         slate50 -> slate750
  primaryBg:           '#f8fafc',   //         slate50 -> slate900

  buttonOffFont:       '#f1f5f9',   //         slate100 -> slate100
  postBorder:          '#f1f5f9',   //         slate100 -> slate750
  selectBorder:        '#f1f5f9',   //         slate100 -> slate750

  navbarBorder:        '#E2E8F0',   //         slate200 -> slate700
  checkboxBorder:      '#e2e8f0',   //         slate200 -> slate700
  buttonBorder:        '#E2E8F0',   //         slate200 -> slate750
  divider:             '#E2E8F0',   //         slate200 -> slate750
  darkDivider:         '#E2E8F0',   //         slate200 -> custom

  textsecondary:       '#CBD5E1',   //         slate300 -> slate500

  placeholder:         '#94a3b8',   //         slate400 -> slate400
  iconPrimary:         '#94a3b8',   //         slate400 -> slate500

  checkboxTick:        '#64748B',   //         slate500 -> slate300

  commentDetails:      '#475569',   //         slate600 -> slate200`
  iconsecondary:       '#475569',   //         slate600 -> slate200
  inputFont:           '#475569',   //         slate600 -> slate200
  selectFont:          '#475569',   //         slate600 -> slate300
  tagFont:             '#475569',   //         slate600 -> slate300
  text:                '#475569',   //         slate600 -> slate300

  textHeader:          '#334155',   //         slate700 -> slate200
  
  boldText:            '#1e293b',   //         slate800 -> slate300
  labelFont:           '#1e293b',   //         slate800 -> slate300

  titleFont:           '#0F172A',   //         slate900 -> slate100

  buttonFont:          '#EFF6FF',   //         blue50 -> blue50
  buttonOffColor:      '#60a5fa',   //         blue400 -> blue500
  accent:              '#3b82f6',   //         blue500 -> blue500
  iconPlusBg:          '#3b82f6',   //         blue500 -> blue500
  buttonBg:            '#3B82F6',   //         blue500 -> blue550
  tagBg:               '#3b82f609', //         blue500 -> custom blue
  tagBgActive:         '#3b82f615', //         blue500 -> custom blue
  tagBorder:           '#3b82f6',   //         blue500 -> custom blue

  bookmarkBg:          '#FAFBFF',   //         custom -> slate750
  iconPrimaryActive:   '#0f172a',   //         custom -> slate50

  black:               '#000',      //         black -> black
  
  redFont:             '#D71E3B',   //         red500 -> custom red
}


//                                             DARK : LIGHT
export const darkTheme = {
  white: '#fff',                    //         white -> white 

  iconPrimaryActive: '#f8fafc',     //         slate50 -> custom 

  buttonOffFont: '#f1f5f9',         //         slate100 -> slate100
  titleFont: '#F1F5F9',             //         slate100 -> slate900

  iconsecondary: '#e2e8f0',         //         slate200 -> slate600
  inputFont: '#e2e8f0',             //         slate200 -> slate600
  commentDetails: '#e2e8f0',        //         slate200 -> slate600
  textHeader: '#E2E8F0',            //         slate200 -> slate700

  checkboxTick: '#CBD5E1',          //         slate300 -> slate500
  text: '#CBD5E1',                  //         slate300 -> slate600
  selectFont: '#CBD5E1',            //         slate300 -> slate600
  tagFont: '#CBD5E1',               //         slate300 -> slate600
  boldText: '#CBD5E1',              //         slate300 -> slate800
  labelFont: '#CBD5E1',             //         slate300 -> slate800

  placeholder: '#94a3b8',           //         slate400 -> slate400

  textsecondary: '#64748B',         //         slate500 -> slate400
  iconPrimary: '#64748B',           //         slate500 -> slate400

  navbarBorder: '#334155',          //         slate700 -> slate200
  checkboxBorder: '#334155',        //         slate700 -> slate200

  divider: '#233045',               //         slate750 -> slate200
  checkboxBg: '#233045',            //         slate750 -> white
  inputBg: '#233045',               //         slate750 -> white
  navbarBg: '#233045',              //         slate750 -> white
  mainDivider: '#233045',           //         slate750 -> slate50
  modalBorder: '#233045',           //         slate750 -> slate50
  addPostBg: '#233045',             //         slate750 -> slate50
  attendingCounterBg: '#233045',    //         slate750 -> slate50
  postBorder: '#233045',            //         slate750 -> slate100
  selectBorder: '#233045',          //         slate750 -> slate100
  buttonBorder: '#233045',          //         slate750 -> slate200
  bookmarkBg: '#233045',            //         slate750 -> custom
  
  modalBg: '#1e293b',               //         slate800 -> white
  secondaryBg: '#1e293b',           //         slate800 -> white
  primaryBg: '#0f172a',             //         slate900 -> slate50
  
  buttonFont: '#EFF6FF',            //         blue50 -> blue50
  buttonOffColor: '#3b82f6',        //         blue500 -> blue400
  accent: '#3b82f6',                //         blue500 -> blue500
  iconPlusBg: '#3b82f6',            //         blue500 -> blue500
  buttonBg: '#3B76F5',              //         blue550 -> blue500
  
  tagBg: '#3b82f610',               //         custom blue -> blue500
  tagBgActive: '#3b82f620',         //         custom blue -> blue500
  tagBorder: '#3b82f650',           //         custom blue -> blue500
  
  redFont: '#D71E3B',               //         custom red -> red500

  darkDivider: '#172233',           //         custom  -> slate200
  black: '#000',                    //         black -> black
};


export const theme = {
  breakPoints: {
    l: '1300px',
    m: '768px',
    mobile: '476px',
  },
  colors: lightTheme,
  fontSize: {
    xs: '11px',
    s: '13px',
    sPlus: '14px',
    m: '15px',
    mPlus: '16px',
    l: '18px',
    xl: '24px',
    xxl: '34px',
  },
}
