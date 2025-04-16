'use client'

import * as React from "react";
import { Checkbox } from "@/components/ui/check"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TabsDemo() {
  // Estado para las tareas
  const [tasks, setTasks] = React.useState<{ name: string, type: string, priority: string }[]>([]);
  const [taskName, setTaskName] = React.useState("");
  const [taskType, setTaskType] = React.useState("");
  const [taskPriority, setTaskPriority] = React.useState("");

  // Función para agregar una tarea
  const addTask = () => {
    if (taskName && taskType && taskPriority) {
      setTasks([
        ...tasks,
        {
          name: taskName,
          type: taskType,
          priority: taskPriority,
        },
      ]);
      // Limpiar los campos después de agregar la tarea
      setTaskName("");
      setTaskType("");
      setTaskPriority("");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="w-[600px]">
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2 text-white">
              <TabsTrigger value="account" className="text-white">
                Create Task
              </TabsTrigger>
              <TabsTrigger value="password" className="text-white">
                Todo List
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Task creation Tab</CardTitle>
                  <CardDescription>
                    Create your tasks here, select the name, type and priority!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Task name</Label>
                    <Input
                      className="text-black"
                      id="name"
                      placeholder="Add task name here"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="type">Type</Label>
                    <Select
                      onValueChange={(value) => setTaskType(value)}
                      value={taskType}
                    >
                      <SelectTrigger className="w-[200px] text-white justify-center">
                        <SelectValue placeholder="Select type of task" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Academic">Academic</SelectItem>
                        <SelectItem value="Personal">Personal</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      onValueChange={(value) => setTaskPriority(value)}
                      value={taskPriority}
                    >
                      <SelectTrigger className="w-[200px] text-white justify-center">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="times-center justify-center">
                  <Button onClick={addTask}>Save task</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Tasks to complete</CardTitle>
                  <CardDescription>
                    Check your completed tasks here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tasks.length === 0 ? (
                    <p>No tasks created yet.</p>
                  ) : (
                    tasks.map((task, index) => (
                      <div key={index} className="items-top flex space-x-2">
                        <Checkbox id={`task${index}`} />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor={`task${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {task.name}
                          </label>
                          <p className="text-sm text-muted-foreground">
                            {task.type} - {task.priority}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}