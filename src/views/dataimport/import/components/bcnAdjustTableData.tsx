 
import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
 


const subjectOptions: LabelValueOptions = [
  {
    label: '损益主题',
    value: 'profit',
  },
  {
    label: '费用主题',
    value: 'expense',
  },
  {
    label: '库存主题',
    value: 'inventory',
  } 
];

export function getBasicColumns(): BasicColumn[] {
  return [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   fixed: 'left',
    //   width: 200,
    // },
    {
      title: '年份编码',
      dataIndex: 'year',
      width: 100,
       
    },
    {
      title: '年份',
      dataIndex: 'yearTxt',
      width: 100,
      
    },
    {
      title: '月份编码',
      dataIndex: 'month',
    },
    {
      title: '月份',
      dataIndex: 'monthTxt',
    },
    {
      title: '组织编码',
      dataIndex: 'org',
      
    },
    {
      title: '组织',
      dataIndex: 'orgTxt',
    },
    {
      title: '管报项目编码',
   
      dataIndex: 'itemCode',
    },
    {
      title: '管报项目',
   
      dataIndex: 'itemTxt',
    },
    {
      title: '渠道编码',
   
      dataIndex: 'channelCode',
    },
    {
      title: '渠道',
      dataIndex: 'channelTxt',
    },
    {
      title: '备注1',
      dataIndex: 'remark1',
    },
    {
      title: '备注2',
      dataIndex: 'remark2',
    },

  ];
}
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      // ...getAdvanceSchema(5),
      // {
      //   field: `field11`,
      //   label: `Slot示例`,
      //   component: 'Select',
      //   slot: 'custom',
      //   colProps: {
      //     xl: 12,
      //     xxl: 8,
      //   },
      // },
      {
        field: `subjectCode`,
        label: `主题`,
        component: 'Select',
        // slot: 'custom',
        componentProps:{
          options: subjectOptions,
        },
        

        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: `name`,
        label: `模板名称`,
        component: 'Input',
        // slot: 'custom',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      }
    ],
  };
}
 
 
export const getAdvanceSchema = (itemNumber = 6): FormSchema[] => {
  const arr: any = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: `field${index}`,
      label: `字段${index}`,
      component: 'Input',
      colProps: {
        xl: 12,
        xxl: 8,
      },
    });
  }
  return arr;
};