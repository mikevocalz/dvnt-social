"use client";

import { useState } from "react";
import { Link } from "solito/link";
import { Pressable, Text as RNText, View } from "react-native";
import { Code, Div, H1, H2, Main, P, Section } from "@expo/html-elements";
import { Button, Card, Text, Badge, Input } from "app/ui";

function ComponentSection({
  title,
  importStatement,
  children,
}: {
  title: string;
  importStatement: string;
  children: React.ReactNode;
}) {
  return (
    <Div className="py-10 border-b border-gray-100 last:border-b-0">
      <Div className="flex items-baseline justify-between mb-6">
        <H2 className="text-lg font-semibold text-gray-900">{title}</H2>
        <Code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
          {importStatement}
        </Code>
      </Div>
      {children}
    </Div>
  );
}

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Div className="min-h-screen bg-white flex flex-col">
      <Main className="flex-1">
        <Section className="py-8 px-6">
          <Div className="max-w-3xl mx-auto">
            <Link href="/">
              <Pressable className="self-start px-4 py-3 border border-blue-600 rounded-lg inline-flex">
                <RNText className="text-base font-semibold text-blue-600">
                  Back
                </RNText>
              </Pressable>
            </Link>
            <H1 className="text-3xl font-bold text-gray-900 mb-3">
              Shared UI Components
            </H1>
            <P className="text-gray-500 mb-2">
              Cross-platform components built with React Native primitives and
              NativeWind.
            </P>
            <P className="text-sm text-gray-400">
              These same components render natively on iOS and Android.
            </P>
            <P className="text-sm text-gray-400 mt-4">
              This is your starting point. Add, modify, or reorganize these
              components however you like.
            </P>
          </Div>
        </Section>

        <Section className="px-6 pb-16">
          <Div className="max-w-3xl mx-auto">
            <ComponentSection
              title="Button"
              importStatement="import { Button } from 'app/ui'"
            >
              <View className="flex-row gap-3 flex-wrap">
                <Button title="Primary" onPress={() => {}} />
                <Button
                  title="Secondary"
                  variant="secondary"
                  onPress={() => {}}
                />
                <Button title="Outline" variant="outline" onPress={() => {}} />
              </View>
            </ComponentSection>

            <ComponentSection
              title="Card"
              importStatement="import { Card } from 'app/ui'"
            >
              <View className="gap-4">
                <Card>
                  <Text variant="body">
                    Default card with subtle border styling.
                  </Text>
                </Card>
                <Card>
                  <Text variant="body">
                    Elevated card with shadow for emphasis.
                  </Text>
                </Card>
              </View>
            </ComponentSection>

            <ComponentSection
              title="Text"
              importStatement="import { Text } from 'app/ui'"
            >
              <View className="gap-2">
                <Text variant="title1">Title variant</Text>
                <Text variant="body">Body variant for regular content.</Text>
                <Text variant="caption1">
                  Caption variant for secondary information.
                </Text>
              </View>
            </ComponentSection>

            <ComponentSection
              title="Badge"
              importStatement="import { Badge } from 'app/ui'"
            >
              <View className="flex-row gap-3 flex-wrap">
                <Badge label="Default" />
                <Badge label="Success" variant="success" />
                <Badge label="Warning" variant="warning" />
              </View>
            </ComponentSection>

            <ComponentSection
              title="Input"
              importStatement="import { Input } from 'app/ui'"
            >
              <View className="max-w-sm">
                <Input
                  label="Email address"
                  placeholder="you@example.com"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
              </View>
            </ComponentSection>
          </Div>
        </Section>
      </Main>
    </Div>
  );
}
