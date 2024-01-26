/**
 * Title: 'Register Componnent design and functionalites implement by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-01-2024
 *
 */

"use client";
import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Alert,
  Form,
  Input,
  Typography,
  DatePicker,
} from "antd";
import { useAppDispatch } from "@/Redux/hooks";
import { changeAuthState } from "@/Redux/Slices/authSlice";
import { useRegisterMutation } from "@/Redux/api/authApi";
import { IUser } from "@/types/auth";
import Notification from "../shared/Notification";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  // redux
  const dispatch = useAppDispatch();
  const [setRegister, options] = useRegisterMutation();
  const router = useRouter();

  const onFinish = async (values: any) => {
    const user: IUser = {
      name: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
      email: values.email,
      // dateOfBirtch:values.
      password: values.password,
    };
    // console.log(user);
    const res = await setRegister(user);
    if (res?.data?.success) {
      Notification({
        description: "User Successfully Registred",
        placement: "bottomRight",
      });
      router.push("/verification");
    } else {
      Notification({
        description: "SomeThing is wrong",
        placement: "bottomLeft",
      });
    }
  };

  return (
    <div className="lg:w-[500px] border p-10 shadow-lg shadow-violet-500 rounded-lg">
      <h2 className="text-center font-bold text-5xl mb-10 ">Register</h2>
      <Form
        name="normal_register"
        className="register-form"
        onFinish={onFinish}
      >
        {/* firstName  */}
        <Form.Item name="firstName" rules={[{ required: true }]}>
          <Input
            type="text"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="FirstName"
          />
        </Form.Item>

        {/* last Name */}
        <Form.Item name="lastName">
          <Input
            type="text"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="LastName"
          />
        </Form.Item>

        {/* Email Firld  */}
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            type="email"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        {/* Date of Birth  Firld  */}
        <Form.Item
          name="dateofbirth"
          rules={[
            { required: true, message: "Please input your dateOfbirth!" },
          ]}
        >
          {/* <Input
            type="text"
          
            placeholder="DateOfBirth"
          />{" "} */}
          <DatePicker className="w-full" placeholder="DateOfBirth" />
        </Form.Item>

        {/* password field1 */}
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        {/* Confirm password Field */}
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>

        {/* register button  */}
        <Form.Item>
          <button className="w-full font-semibold text-xl bg-violet-500 hover:bg-violet-800 transition-colors duration-300 px-4 py-1 text-white rounded">
            Register
          </button>
        </Form.Item>
      </Form>
      <div>
        <span className="font-semibold">
          Already Have an Account Please{" "}
          <button
            onClick={() => dispatch(changeAuthState())}
            className="text-blue-400 underline "
          >
            Login
          </button>{" "}
        </span>
      </div>
    </div>
  );
};

export default Register;
